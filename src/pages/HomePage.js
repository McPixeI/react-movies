import { MediaItem } from '../components/MediaItem/MediaItem'
import { useTrendingMedia } from '../queries/use-trending-media'
import Carousel from 'react-multi-carousel'
import { defaultCarouselConfig } from '../utils/config/carousel-config'

export const HomePage = () => {
  const { medias, isError, error } = useTrendingMedia()

  if (isError) {
    console.log(`Error loading home page: ${error}`)
    return 'Error'
  }

  return (
    <>
      <div className='mx-auto py-8 px-4 lg:max-w-7xl'>
        <h2 className='text-2xl mb-4'>Trending now</h2>
        <Carousel
          responsive={defaultCarouselConfig}
          infinite
          autoPlay={false}
          shouldResetAutoplay={false}
          itemClass='p-1'
        >
          {medias?.map(media => <MediaItem key={media.id} {...media} />)}
        </Carousel>
      </div>
    </>
  )
}
