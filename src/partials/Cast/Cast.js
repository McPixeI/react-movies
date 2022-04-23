import { Card, CardBody, CardHeading } from '../../components/UI/Card'
import { useCast } from '../../queries/use-cast'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { API_IMG_BASE_PATH } from '../../utils/constants/api'
import { PROFILE_SIZE } from '../../utils/constants/media'
import { defaultCarouselConfig } from '../../utils/config/carousel-config'
import { MediaItemSkeleton } from '../../components/MediaItem/MediaItemSkeleton'

export const Cast = ({ mediaType, mediaId }) => {
  const { cast, isError, error, isLoading } = useCast(mediaType, mediaId)

  if (isError) {
    throw new Error(`An error ocurred rendering Cast: ${error}`)
  }

  const skeletons = Array.from({ length: 8 }, (v, index) => ({
    id: `loading-media-${index}`
  }))

  const castItems = isLoading
    ? skeletons.map(skeleton => <MediaItemSkeleton key={skeleton.id} />)
    : cast.map(person => (
      <Card key={person.id} className='h-full'>
        <CardHeading className='aspect-[2/3] overflow-hidden'>
          <img
            className='w-full'
            src={`${API_IMG_BASE_PATH}/${PROFILE_SIZE.MEDIUM}/${person.profile_path}`}
            alt={person.name}
            loading='lazy'
          />
        </CardHeading>
        <CardBody>{person.name}</CardBody>
      </Card>
    )
    )

  return (
    <section className='container mx-auto py-4 my-4'>
      <h2 className='text-2xl mb-4'>Cast</h2>

      <Carousel
        responsive={defaultCarouselConfig}
        infinite={false}
        autoPlay={false}
        shouldResetAutoplay={false}
        removeArrowOnDeviceType={['tablet', 'mobile']}
        itemClass='p-1'
      >
        {castItems}
      </Carousel>
    </section>

  )
}
