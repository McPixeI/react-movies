import { createContext, useContext, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useSearch } from '../queries/use-search'

export const SearchContext = createContext()
SearchContext.displayName = 'SearchContext'

const SearchProvider = ({ children }) => {
  const [query, setQuery] = useState('')
  const [params] = useSearchParams()

  const queryString = params.get('q')

  // ToDO: Si el usuario entra con una busqeuda hecha desde url
  // ahora msotramos resultados, PERO
  // Si escribe muy rapido no entra en el !query y no funciona el debounce
  useEffect(() => {
    if (!query && queryString) {
      setQuery(queryString)
    }
  }, [query, queryString])

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
