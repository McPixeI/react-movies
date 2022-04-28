import { createContext, useContext, useState } from 'react'
import { useSearch } from '../queries/use-search'

export const SearchContext = createContext()
SearchContext.displayName = 'SearchContext'

const SearchProvider = ({ children }) => {
  const [query, setQuery] = useState('')

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
