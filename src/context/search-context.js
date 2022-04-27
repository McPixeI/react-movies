import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { createSearchParams, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { useSearch } from '../queries/use-search'

const initialState = {
  query: '',
  setQuery: () => {},
  data: [],
  isShown: false,
  setIsShown: () => {}
}

export const SearchContext = createContext(initialState)
SearchContext.displayName = 'SearchContext'

const SearchProvider = ({ children }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [queryParams, setQueryParams] = useSearchParams()
  const [isShown, setIsShown] = useState(false)

  const query = queryParams.get('q') ?? ''

  useEffect(() => {
    if (query.length > 0) {
      if (location.pathname !== '/search') {
        navigate({
          pathname: 'search',
          search: createSearchParams({
            q: query
          }).toString()
        })
      }
    }
  }, [query, location.pathname, navigate])

  const setQuery = useCallback(
    (query) => {
      if (query.length > 0) {
        setQueryParams({ q: query })
      } else {
        setQueryParams({})
      }
    },
    [setQueryParams]
  )

  const {
    data,
    status,
    error,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage
  } = useSearch(query)

  return (
    <SearchContext.Provider
      value={{
        isShown,
        setIsShown,
        query,
        setQuery,
        data,
        status,
        error,
        isFetchingNextPage,
        hasNextPage,
        fetchNextPage
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}

const useSearchContext = () => {
  const state = useContext(SearchContext)
  return state
}

export { SearchProvider, useSearchContext }
