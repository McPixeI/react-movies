import { ErrorBoundary } from 'react-error-boundary'
import AppRoutes from './AppRoutes'
import { AppFooter } from './containers/AppFooter/AppFooter'
import { AppNav } from './containers/AppNav/AppNav'
import { ErrorFallback } from './utils/errorBoundaries/ErrorFallback'

function App () {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <AppNav />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <AppRoutes />
      </ErrorBoundary>
      <AppFooter />
    </ErrorBoundary>
  )
}

export default App
