import { Card, CardBody, CardHeading } from '../../components/UI/Card'
import Spinner from '../../components/UI/Spinner'
import STATUSES from '../../utils/constants/statuses'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { API_IMG_BASE_PATH } from '../../utils/constants/api'
import { POSTER_SIZE } from '../../utils/constants/media'
import { useRecommendations } from '../../queries/use-recommendations'

const relatedCarouselConfig = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 8,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 6,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  }
}

export const Recommended = ({ mediaType, mediaId }) => {
  const { data, status } = useRecommendations(mediaType, mediaId)

  if (status === STATUSES.LOADING) {
    return <Spinner />
  }

  if (status === STATUSES.ERROR) {
    return 'Error'
  }

  return (
    <section className='container mx-auto py-4 my-4'>
      <h2 className='text-xl mb-4'>Recommended</h2>
      <Carousel
        responsive={relatedCarouselConfig}
        infinite={false}
        autoPlay={false}
        shouldResetAutoplay={false}
      >
        {data.results.map(media => {
          return (
            <Card key={media.name} className='h-full'>
              <CardHeading>
                <img
                  src={`${API_IMG_BASE_PATH}/${POSTER_SIZE.MEDIUM}/${media.poster_path}`}
                  alt={media.name}
                />
              </CardHeading>
            </Card>
          )
        })}
      </Carousel>
    </section>

  )
}
