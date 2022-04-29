import { EmojiSadIcon } from '@heroicons/react/solid'
import { Container } from '../containers/Container/Container'
import { Button } from '../components/UI/Button/Button'
import { Link } from 'react-router-dom'

export const NotFoundPage = () => {
  return (
    <Container className='min-h-[70vh] flex flex-col justify-center items-center'>
      <EmojiSadIcon className='w-16 h-16 mb-2' />
      <h1 className='text-3xl font-semibold mb-3'>Error <span className='text-primary'>404</span></h1>
      <p className='text-lg mb-8'>Sorry, the page you are looking for doesn't exist.</p>
      <Link to='/'>
        <Button>
          Go back
        </Button>
      </Link>
    </Container>
  )
}
