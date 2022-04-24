import { useRecommendations } from '../../queries/use-recommendations'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { defaultSwiperConfig } from '../../utils/config/carousel-config'
import { MediaItem } from '../../components/MediaItem/MediaItem'

export const Recommended = ({ mediaType, mediaId }) => {
  const { medias, isError, error } = useRecommendations(mediaType, mediaId)

  if (isError) {
    throw new Error(`An error ocurred rendering Cast: ${error}`)
  }

  return (
    <section className='container mx-auto py-4 my-4'>
      <h2 className='text-3xl font-semibold mb-4'>Recommended</h2>
      <Swiper
        key={medias.length} // Key for rerendering swiper when cast array changes
        navigation
        modules={[Navigation]}
        slidesPerView={2}
        spaceBetween={8}
        breakpoints={defaultSwiperConfig}
        grabCursor
      >
        {medias?.map(media =>
          <SwiperSlide key={media.id}>
            <MediaItem {...media} />
          </SwiperSlide>)}
      </Swiper>
    </section>

  )
}
