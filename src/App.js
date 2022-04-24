import AppRoutes from './AppRoutes'
import { AppFooter } from './containers/AppFooter/AppFooter'
import { AppNav } from './containers/AppNav/AppNav'

function App () {
  return (
    <>
      <AppNav />
      <AppRoutes />
      <AppFooter />
    </>
  )
}

export default App
