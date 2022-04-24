import { MediaItem } from '../components/MediaItem/MediaItem'
import { useTrendingMedia } from '../queries/use-trending-media'
import { Spinner } from '../components/UI/Spinner/Spinner'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { defaultSwiperConfig } from '../utils/config/carousel-config'

export const HomePage = () => {
  const { medias, isError, error, isLoading } = useTrendingMedia()

  if (isLoading) return <Spinner />

  if (isError) {
    console.log(`Error loading home page: ${error}`)
    return 'Error'
  }

  return (
    <>
      <div className='mx-auto py-8 px-4 lg:max-w-7xl'>
        <h2 className='text-2xl mb-4'>Trending now</h2>

        <Swiper
          navigation
          modules={[Navigation]}
          breakpoints={defaultSwiperConfig}
          grabCursor
        >
          {medias?.map(media =>
            <SwiperSlide key={media.id}>
              <MediaItem {...media} />
            </SwiperSlide>)}
        </Swiper>
      </div>
    </>
  )
}
