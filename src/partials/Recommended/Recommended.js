import { useRecommendations } from '../../queries/use-recommendations'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { defaultCarouselConfig } from '../../utils/config/carousel-config'
import { MediaItemSkeleton } from '../../components/MediaItem/MediaItemSkeleton'
import { MediaItem } from '../../components/MediaItem/MediaItem'

export const Recommended = ({ mediaType, mediaId }) => {
  const { medias, isError, error, isLoading } = useRecommendations(mediaType, mediaId)

  if (isError) {
    throw new Error(`An error ocurred rendering Cast: ${error}`)
  }

  const skeletons = Array.from({ length: 8 }, (v, index) => ({
    id: `loading-media-${index}`
  }))

  const mediaItems = isLoading
    ? skeletons.map(skeleton => <MediaItemSkeleton key={skeleton.id} />)
    : medias.map(media => <MediaItem key={media.id} {...media} />)

  return (
    <section className='container mx-auto py-4 my-4'>
      <h2 className='text-2xl mb-4'>Recommended</h2>
      <Carousel
        responsive={defaultCarouselConfig}
        infinite={false}
        autoPlay={false}
        shouldResetAutoplay={false}
        removeArrowOnDeviceType={['tablet', 'mobile']}
        itemClass='p-1'
      >
        {mediaItems}
      </Carousel>
    </section>

  )
}
