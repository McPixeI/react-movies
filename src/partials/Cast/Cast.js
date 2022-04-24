import { Card, CardBody, CardHeading } from '../../components/UI/Card'
import { useCast } from '../../queries/use-cast'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { API_IMG_BASE_PATH } from '../../utils/constants/api'
import { PROFILE_SIZE } from '../../utils/constants/media'
import { defaultCarouselConfig } from '../../utils/config/carousel-config'
import { Image } from '../../components/Image/Image'
import fallbackImage from '../../images/cast-fallback.png'
import { CustomLeftArrow, CustomRightArrow } from '../../components/CustomCarouselArrows/CustomCarouselArrows'

export const Cast = ({ mediaType, mediaId }) => {
  const { cast, isError, error } = useCast(mediaType, mediaId)

  if (isError) {
    throw new Error(`An error ocurred rendering Cast: ${error}`)
  }

  return (
    <section className='container mx-auto py-4 my-4'>
      <h2 className='text-3xl font-semibold mb-4'>Cast</h2>

      <Carousel
        responsive={defaultCarouselConfig}
        autoPlay={false}
        infinite
        shouldResetAutoplay={false}
        removeArrowOnDeviceType={['tablet', 'mobile']}
        itemClass='p-1'
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
      >
        {cast?.map(person =>
          <Card key={person.id} className='h-full'>
            <CardHeading className='relative aspect-[2/3] overflow-hidden'>
              <Image
                className='w-full'
                src={`${API_IMG_BASE_PATH}/${PROFILE_SIZE.MEDIUM}/${person.profile_path}`}
                fallback={fallbackImage}
                alt={person.name}
                loading='lazy'
              />
            </CardHeading>
            <CardBody>
              <p className='font-medium text-lg mb-1'>{person.name}</p>
              <p className='font-normal text-md'>{`"${person.character}"`}</p>
            </CardBody>
          </Card>
        )}
      </Carousel>
    </section>

  )
}
