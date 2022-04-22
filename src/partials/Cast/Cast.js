import { Card, CardBody, CardHeading } from '../../components/UI/Card'
import Spinner from '../../components/UI/Spinner'
import { useCast } from '../../queries/use-cast'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { API_IMG_BASE_PATH } from '../../utils/constants/api'
import { PROFILE_SIZE } from '../../utils/constants/media'
import { castCarouselConfig } from '../../utils/config/carousel-config'

export const Cast = ({ mediaType, mediaId }) => {
  const { data, isLoading, isError, error, isSuccess } = useCast(mediaType, mediaId)

  if (isError) {
    throw new Error(`An error ocurred rendering Cast: ${error}`)
  }

  return (
    <section className='container mx-auto py-4 my-4'>
      <h2 className='text-2xl mb-4'>Cast</h2>
      {isLoading && <Spinner />}
      {isSuccess &&
        <Carousel
          responsive={castCarouselConfig}
          infinite={false}
          autoPlay={false}
          shouldResetAutoplay={false}
          removeArrowOnDeviceType={['tablet', 'mobile']}
          itemClass='p-1'
        >
          {data.cast.map(person => {
            return (
              <Card key={person.id} className='h-full'>
                <CardHeading>
                  <img
                    src={`${API_IMG_BASE_PATH}/${PROFILE_SIZE.MEDIUM}/${person.profile_path}`}
                    alt={person.name}
                    loading='lazy'
                  />
                </CardHeading>
                <CardBody>{person.name}</CardBody>
              </Card>
            )
          })}
        </Carousel>}
    </section>

  )
}
