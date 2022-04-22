import { Card, CardBody, CardHeading } from '../../components/UI/Card'
import Spinner from '../../components/UI/Spinner'
import { useCast } from '../../queries/use-cast'
import STATUSES from '../../utils/constants/statuses'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { API_IMG_BASE_PATH } from '../../utils/constants/api'
import { PROFILE_SIZE } from '../../utils/constants/media'

const castCarouselConfig = {
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

export const Cast = ({ mediaType, mediaId }) => {
  const { data, status } = useCast(mediaType, mediaId)

  console.log(data)
  if (status === STATUSES.LOADING) {
    return <Spinner />
  }

  if (status === STATUSES.ERROR) {
    return 'Error'
  }

  return (
    <section className='container mx-auto py-4 my-4'>
      <h2 className='text-2xl mb-4'>Cast</h2>
      <Carousel
        responsive={castCarouselConfig}
        infinite={false}
        autoPlay={false}
        shouldResetAutoplay={false}
        itemClass='p-1'
      >
        {data.cast.map(person => {
          return (
            <Card key={person.name} className='h-full'>
              <CardHeading>
                <img
                  src={`${API_IMG_BASE_PATH}/${PROFILE_SIZE.MEDIUM}/${person.profile_path}`}
                  alt={person.name}
                />
              </CardHeading>
              <CardBody>{person.name}</CardBody>
            </Card>
          )
        })}
      </Carousel>
    </section>

  )
}
