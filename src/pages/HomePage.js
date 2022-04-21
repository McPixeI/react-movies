import { MovieItem } from '../components/MovieItem/MovieItem'
import { useTrendingMedia } from '../queries/use-trending-media'
import { Spinner } from '../components/UI/Spinner/Spinner'
import STATUSES from '../utils/constants/statuses'

export const HomePage = () => {
  const { data, status } = useTrendingMedia(1)
  console.log(data)

  if (status === STATUSES.LOADING) {
    return <Spinner />
  }

  if (status === STATUSES.ERROR) {
    return 'Error'
  }

  return (
    <>
      <h1>This is homepage</h1>
      <div className='max-w-2xl mx-auto py-8 lg:max-w-7xl '>
        <div className='mt-6 grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4 lg:grid-cols-4 xl:gap-x-8'>
          {data.results.length ? (
            data.results.map(media => <MovieItem key={media.id} {...media} />)
          ) : (
            <p>No hay resultados</p>
          )}
        </div>{' '}
      </div>
    </>
  )
}
