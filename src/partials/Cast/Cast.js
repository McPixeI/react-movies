import { Card, CardBody, CardHeading } from '../../components/UI/Card'
import { useCast } from '../../queries/use-cast'
import { API_IMG_BASE_PATH } from '../../utils/constants/api'
import { PROFILE_SIZE } from '../../utils/constants/media'
import { defaultSwiperConfig } from '../../utils/config/carousel-config'
import { Image } from '../../components/Image/Image'
import fallbackImage from '../../images/cast-fallback.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { Section } from '../../containers/Section/Section'

export const Cast = ({ mediaType, mediaId }) => {
  const { cast, isError, error } = useCast(mediaType, mediaId)

  if (isError) {
    throw new Error(`An error ocurred rendering Cast: ${error}`)
  }

  return (
    <Section title='Cast'>
      <Swiper
        key={cast.length} // Key for rerendering swiper when cast array changes
        navigation
        modules={[Navigation]}
        slidesPerView={3}
        spaceBetween={8}
        breakpoints={defaultSwiperConfig}
        grabCursor
      >
        {cast.map(person => {
          return (
            <SwiperSlide key={person.id}>
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
                  <p className='font-normal text-md'>{person.character && `"${person.character}"`}</p>
                </CardBody>
              </Card>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Section>

  )
}
