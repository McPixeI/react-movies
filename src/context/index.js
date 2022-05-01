import * as React from 'react'
import { QueryCache, QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter as Router, useLocation } from 'react-router-dom'
import { SearchProvider } from './search-context'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1
    }
  },
  queryCache: new QueryCache({
    onError: (error, query) => {
      // only show error if we already have data in the cache
      // which indicates a failed background update
      if (query.state.data !== undefined) {
        // TODO: MOSTRAR UNA ALERT O TOAST EN LUGAR DE CONSOLE ERROR
        console.error(`Something went wrong: ${error.message}`)
      }
    }
  })
})

const ScrollToTop = () => {
  const { pathname } = useLocation()
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function AppProviders ({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <ScrollToTop />
        <SearchProvider>
          {children}
        </SearchProvider>
      </Router>
    </QueryClientProvider>
  )
}

export { AppProviders }
