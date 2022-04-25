import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { defaultSwiperConfig } from '../../utils/config/carousel-config'
import { MediaItem } from '../../components/MediaItem/MediaItem'
import { Section } from '../../containers/Section/Section'
import { useTrendingMedia } from '../../queries/use-trending-media'
import { API_MEDIA_TYPE } from '../../utils/constants/api'

export const Trending = ({ mediaType }) => {
  const { medias, isError, error } = useTrendingMedia(mediaType)

  if (isError) {
    throw new Error(`An error ocurred rendering Cast: ${error}`)
  }

  if (!medias.length) return null

  return (
    <Section title={`Trending ${mediaType === API_MEDIA_TYPE.TV ? mediaType : mediaType + 's'}`}>
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
    </Section>

  )
}
