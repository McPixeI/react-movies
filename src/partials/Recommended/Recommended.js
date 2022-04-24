import { useRecommendations } from '../../queries/use-recommendations'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { defaultCarouselConfig } from '../../utils/config/carousel-config'
import { MediaItem } from '../../components/MediaItem/MediaItem'

export const Recommended = ({ mediaType, mediaId }) => {
  const { medias, isError, error } = useRecommendations(mediaType, mediaId)

  if (isError) {
    throw new Error(`An error ocurred rendering Cast: ${error}`)
  }

  return (
    <section className='container mx-auto py-4 my-4'>
      <h2 className='text-3xl font-semibold mb-4'>Recommended</h2>
      <Carousel
        responsive={defaultCarouselConfig}
        infinite
        autoPlay={false}
        shouldResetAutoplay={false}
        removeArrowOnDeviceType={['tablet', 'mobile']}
        itemClass='p-1'
      >
        {medias?.map(media => <MediaItem key={media.id} {...media} />)}
      </Carousel>
    </section>

  )
}
