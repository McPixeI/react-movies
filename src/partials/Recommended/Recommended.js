import { Card, CardHeading } from '../../components/UI/Card'
import Spinner from '../../components/UI/Spinner'
import { API_IMG_BASE_PATH } from '../../utils/constants/api'
import { POSTER_SIZE } from '../../utils/constants/media'
import { useRecommendations } from '../../queries/use-recommendations'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { recommendedCarouselConfig } from '../../utils/config/carousel-config'

export const Recommended = ({ mediaType, mediaId }) => {
  const { data, isLoading, isError, error, isSuccess } = useRecommendations(mediaType, mediaId)

  if (isError) {
    throw new Error(`An error ocurred rendering Cast: ${error}`)
  }

  return (
    <section className='container mx-auto py-4 my-4'>
      <h2 className='text-2xl mb-4'>Recommended</h2>
      {isLoading && <Spinner />}
      {isSuccess &&
        <Carousel
          responsive={recommendedCarouselConfig}
          infinite={false}
          autoPlay={false}
          shouldResetAutoplay={false}
          removeArrowOnDeviceType={['tablet', 'mobile']}
          itemClass='p-1'
        >
          {data.results.map(media => {
            return (
              <Card key={media.id} className='h-full'>
                <CardHeading>
                  <img
                    src={`${API_IMG_BASE_PATH}/${POSTER_SIZE.MEDIUM}/${media.poster_path}`}
                    alt={media.name}
                  />
                </CardHeading>
              </Card>
            )
          })}
        </Carousel>}
    </section>

  )
}
