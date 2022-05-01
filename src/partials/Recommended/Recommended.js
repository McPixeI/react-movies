import { useRecommendations } from '../../queries/use-recommendations'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { defaultSwiperConfig } from '../../utils/config/carousel-config'
import { MediaItem } from '../../components/MediaItem/MediaItem'
import { useSkeleton } from '../../utils/hooks/use-skeleton'
import { MediaItemSkeleton } from '../../utils/skeleton/parts/MediItemSkeleton'
import { useId } from 'react'
import { ErrorBox } from '../../components/ErrorBox/ErrorBox'

export const Recommended = ({ mediaType, mediaId }) => {
  const { medias, isError, isLoading, isSuccess } = useRecommendations(mediaType, mediaId)
  const skeletons = useSkeleton(5, 'recommended')

  if (isError) return <ErrorBox height={450} type='recommended' />

  return (
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

      {isSuccess && (medias.length > 0
        ? medias.map(media =>
          <SwiperSlide key={media.id}>
            <MediaItem media={media} />
          </SwiperSlide>
          )
        : <ErrorBox type='recommended' />)}
    </Swiper>
  )
}
