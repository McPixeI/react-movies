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
import { API_MEDIA_TYPE } from '../utils/constants/api'
import { Trending } from '../partials/Trending/Trending'

export const HomePage = () => {
  const { medias, isError, error, isLoading } = useTrendingMedia(API_MEDIA_TYPE.MOVIE)
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
      <Trending mediaType={API_MEDIA_TYPE.MOVIE} />
      <Trending mediaType={API_MEDIA_TYPE.TV} />

    </>
  )
}
