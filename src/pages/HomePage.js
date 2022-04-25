import { MediaItem } from '../components/MediaItem/MediaItem'
import { useTrendingMedia } from '../queries/use-trending-media'
import { Spinner } from '../components/UI/Spinner/Spinner'
import { Button } from '../components/UI/Button/Button'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { defaultSwiperConfig } from '../utils/config/carousel-config'
import { Hero } from '../components/Hero/Hero'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Section } from '../containers/Section/Section'

export const HomePage = () => {
  const { medias, isError, error, isLoading } = useTrendingMedia()
  const [cover, setCover] = useState({})

  useEffect(() => {
    setCover(medias[0])
  }, [medias])

  if (isLoading) return <Spinner />

  if (isError) {
    console.log(`Error loading home page: ${error}`)
    return 'Error'
  }

  return (
    <>
      <Hero media={cover}>
        <Link to={`/${cover.media_type}/${cover.id}`}>
          <Button>Ver más</Button>
        </Link>
      </Hero>
      <Section title='Trending now'>
        <Swiper
          key={medias.length} // Key for rerendering swiper when cast array changes
          navigation
          modules={[Navigation]}
          slidesPerView={2}
          spaceBetween={8}
          breakpoints={defaultSwiperConfig}
          grabCursor
        >
          {medias.map(media =>
            <SwiperSlide key={media.id}>
              <MediaItem {...media} />
            </SwiperSlide>)}
        </Swiper>
      </Section>

    </>
  )
}
