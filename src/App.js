import { Card, CardHeading, CardBody } from './components/UI/Card'
import Toggle from './components/UI/Forms/Toggle'
import { useDarkMode } from './utils/hooks/use-dark-mode'

// Provisionally here for testing purposes
function ThemeToggle ({ className }) {
  const [isDark, setIsDark] = useDarkMode()

  return (
    <Toggle
      aria-label={isDark ? 'Activate Light Mode' : 'Activate Dark Mode'}
      text={isDark ? 'dark theme' : 'light theme'}
      onClick={() => setIsDark(!isDark)}
    />
  )
}

function App () {
  return (
    <>
      <ThemeToggle />
      <Card>
        <CardHeading></CardHeading>
      </Card>
    </>
  )
}

export default App
