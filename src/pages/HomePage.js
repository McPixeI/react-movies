import { MediaItem } from '../components/MediaItem/MediaItem'
import { useTrendingMedia } from '../queries/use-trending-media'
import Carousel from 'react-multi-carousel'
import { defaultCarouselConfig } from '../utils/config/carousel-config'
import { MediaItemSkeleton } from '../components/MediaItem/MediaItemSkeleton'

export const HomePage = () => {
  const { medias, isError, error, isLoading } = useTrendingMedia()

  if (isError) {
    console.log(`Error loading home page: ${error}`)
    return 'Error'
  }

  const skeletons = Array.from({ length: 8 }, (v, index) => ({
    id: `loading-media-${index}`
  }))

  const mediaItems = isLoading
    ? skeletons.map(skeleton => <MediaItemSkeleton key={skeleton.id} />)
    : medias.map(media => <MediaItem key={media.id} {...media} />)

  return (
    <>
      <div className='mx-auto py-8 px-4 lg:max-w-7xl'>
        <h2 className='text-2xl mb-4'>Trending now</h2>
        <Carousel
          responsive={defaultCarouselConfig}
          infinite={false}
          autoPlay={false}
          shouldResetAutoplay={false}
          itemClass='p-1'
        >
          {mediaItems}
        </Carousel>
      </div>
    </>
  )
}
