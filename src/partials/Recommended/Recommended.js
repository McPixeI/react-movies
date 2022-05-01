import { useRecommendations } from '../../queries/use-recommendations'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { defaultSwiperConfig } from '../../utils/config/carousel-config'
import { MediaItem } from '../../components/MediaItem/MediaItem'
import { Section } from '../../containers/Section/Section'
import { useSkeleton } from '../../utils/hooks/use-skeleton'
import { MediaItemSkeleton } from '../../utils/skeleton/MediItemSkeleton'
import { useId } from 'react'

export const Recommended = ({ mediaType, mediaId }) => {
  const { medias, isError, isLoading, isSuccess } = useRecommendations(mediaType, mediaId)
  const skeletons = useSkeleton(5, 'recommended')

  if (isError) {
    // TODO: Extract to component
    return (
      <Section title='Recommended'>
        <div role='alert' className='h-[460px] flex items-center justify-center'>
          <p>Sorry, we could not retrieve cast info</p>
        </div>
      </Section>
    )
  }

  return (
    <Section title='Recommended'>
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
