import Toggle from './components/UI/Forms/Toggle'
import { useDarkMode } from './utils/hooks/use-dark-mode'

// Provisionally here for testing purposes
function ThemeToggle ({ className }) {
  const [darkMode, setDarkMode] = useDarkMode()

  return (
    <Toggle
      name='theme_toggler'
      aria-label={darkMode ? 'Activate Light Mode' : 'Activate Dark Mode'}
      text={darkMode ? 'Light theme' : 'Dark theme'}
      onClick={() => setDarkMode(!darkMode)}
      checked={darkMode}
    />
  )
}

function App () {
  return (
    <>
      <ThemeToggle />
    </>
  )
}

export default App
