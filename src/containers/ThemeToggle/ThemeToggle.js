import Toggle from '../../components/UI/Forms/Toggle'
import { useDarkMode } from '../../utils/hooks/use-dark-mode'
import { MoonIcon, SunIcon } from '@heroicons/react/solid'

export const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useDarkMode()

  return (
    <Toggle
      name='theme_toggler'
      aria-label={darkMode ? 'Activate Light Mode' : 'Activate Dark Mode'}
      label={darkMode ? <MoonIcon className='w-5 h-5 fill-gray-300 relative -left-1.5' /> : <SunIcon className='w-5 h-5 fill-yellow-500 relative -left-1.5' />}
      onClick={() => setDarkMode(!darkMode)}
      checked={darkMode}
    />
  )
}
