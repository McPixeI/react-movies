import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { defaultSwiperConfig } from '../../utils/config/carousel-config'
import { MediaItem } from '../../components/MediaItem/MediaItem'
import { Section } from '../../containers/Section/Section'
import { useTrendingMedia } from '../../queries/use-trending-media'
import { API_MEDIA_TYPE } from '../../utils/constants/api'
import { MediaItemSkeleton } from '../../utils/skeleton/parts/MediItemSkeleton'
import { useSkeleton } from '../../utils/hooks/use-skeleton'
import { useId } from 'react'

export const Trending = ({ mediaType }) => {
  const { medias, isError, isLoading, isSuccess, error } = useTrendingMedia(mediaType)
  const skeletons = useSkeleton(5, 'media')

  if (isError) {
    throw new Error(`An error ocurred rendering Cast: ${error}`)
  }

  return (
    <Section title={`Trending ${mediaType === API_MEDIA_TYPE.TV ? mediaType : mediaType + 's'}`}>
      <Swiper
        key={useId} // Key for rerendering swiper when cast array changes
        navigation
        modules={[Navigation]}
        slidesPerView={2}
        spaceBetween={8}
        breakpoints={defaultSwiperConfig}
        grabCursor
      >
        {isLoading && skeletons.map(skeleton =>
          <SwiperSlide key={skeleton.id}>
            <MediaItemSkeleton />
          </SwiperSlide>)}

        {isSuccess && medias?.map(media =>
          <SwiperSlide key={media.id}>
            <MediaItem media={media} />
          </SwiperSlide>)}
      </Swiper>
    </Section>
  )
}
