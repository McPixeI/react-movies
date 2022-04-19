import Button from './components/UI/Button'
import { TextInput } from './components/UI/Forms/TextInput/TextInput'
import { useDarkMode } from './utils/hooks/use-dark-mode'

// Provisionally here for testing purposes
function ThemeToggle ({ className }) {
  const [isDark, setIsDark] = useDarkMode()

  return (
    <Button
      aria-label={isDark ? 'Activate Light Mode' : 'Activate Dark Mode'}
      onClick={() => setIsDark(!isDark)}
      className='mb-8'
    >
      {isDark ? 'dark theme' : 'light theme'}
    </Button>
  )
}

function App () {
  return (
    <>
      <ThemeToggle />
      <h1 className='text-3xl font-bold my-6'>Botones</h1>

      <h2 className='text-2xl font-bold my-4'>Primary</h2>
      <Button variant='primary' size='sm' className='mr-2 mb-2'>
        Primary sm
      </Button>
      <Button variant='primary' size='md' className='mr-2 mb-2'>
        Primary md
      </Button>
      <Button variant='primary' size='lg' className='mr-2 mb-2'>
        Primary lg
      </Button>

      <h2 className='text-2xl font-bold my-4'>Secondary</h2>
      <Button variant='secondary' size='sm' className='mr-2 mb-2'>
        Secondary sm
      </Button>
      <Button variant='secondary' size='md' className='mr-2 mb-2'>
        Secondary md
      </Button>
      <Button variant='secondary' size='lg' className='mr-2 mb-2'>
        Secondary lg
      </Button>

      <h2 className='text-2xl font-bold my-4'>Loading & disabled</h2>
      <Button variant='primary' size='md' loading className='mr-2 mb-2'>
        Primary loading
      </Button>
      <Button variant='secondary' size='md' disabled className='mr-2 mb-2'>
        Secondary disabled
      </Button>

      <h2 className='text-3xl font-bold mt-8 my-4'>Inputs</h2>
      <h2 className='text-2xl font-bold my-4'>Inputs with label</h2>
      <TextInput size='sm' label='Input label' className='mb-4' />
      <TextInput size='md' label='Input label' className='mb-4' />
      <TextInput size='lg' label='Input label' className='mb-4' />

      <h2 className='text-2xl font-bold my-4'>Inputs without label</h2>
      <TextInput size='sm' className='mb-4' />
      <TextInput size='md' className='mb-4' />
      <TextInput size='lg' className='mb-4' />
    </>
  )
}

export default App
