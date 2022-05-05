import { createContext, useContext, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useSearch } from '../queries/use-search'

export const SearchContext = createContext()
SearchContext.displayName = 'SearchContext'

const SearchProvider = ({ children }) => {
  const [isShown, setIsShown] = useState(false)
  const [params] = useSearchParams()
  const queryString = params.get('q')
  const [query, setQuery] = useState(queryString)

  /* MEMO: Allows to enter a search directly from url
  and prevents to change query on every keypress if searchbar is shown */
  useEffect(() => {
    if (!query && !isShown && queryString) {
      setQuery(queryString)
    }
  }, [query, queryString, isShown])

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
        query,
        setQuery,
        isShown,
        setIsShown,
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
