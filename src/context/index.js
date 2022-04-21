import * as React from 'react'
import { QueryCache, QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter as Router } from 'react-router-dom'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1
    }
  },
  queryCache: new QueryCache({
    onError: (error, query) => {
      // only show error toasts if we already have data in the cache
      // which indicates a failed background update
      if (query.state.data !== undefined) {
        // TODO: MOSTRAR UNA ALAERT O TOAST EN LUGAR DE CONSOLE ERROR
        console.error(`Something went wrong: ${error.message}`)
      }
    }
  })
})

function AppProviders ({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>{children}</Router>
    </QueryClientProvider>
  )
}

export { AppProviders }
