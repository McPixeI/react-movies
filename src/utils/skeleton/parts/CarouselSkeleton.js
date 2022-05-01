import { SwiperSlide } from 'swiper/react'
import { MediaItemSkeleton } from './MediItemSkeleton'

export const CarouselSkeleton = ({ slides = 5 }) => {
  const skeletons = Array.from({ length: slides }, (v, index) => ({
    id: `loading-slide-${index}`
  }))

  return (
    skeletons.map(skeleton =>
      <SwiperSlide key={skeleton.id}>
        <MediaItemSkeleton />
      </SwiperSlide>
    )
  )
}
