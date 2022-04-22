import { MediaItem } from '../components/MediaItem/MediaItem'
import { useTrendingMedia } from '../queries/use-trending-media'
import { Spinner } from '../components/UI/Spinner/Spinner'
import STATUSES from '../utils/constants/statuses'

export const HomePage = () => {
  const { data, status } = useTrendingMedia(1)

  if (status === STATUSES.LOADING) {
    return <Spinner />
  }

  if (status === STATUSES.ERROR) {
    return 'Error'
  }

  return (
    <>
      <div className='container max-w-2xl mx-auto py-8 px-4 lg:max-w-7xl'>
        <div className='mt-6 grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4 lg:grid-cols-4 xl:gap-x-8'>
          {data.results.length
            ? data.results.map(media => <MediaItem key={media.id} {...media} />)
            : <p>No se han encontrado resultados</p>}
        </div>
      </div>
    </>
  )
}
