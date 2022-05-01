import { useTrendingMedia } from '../queries/use-trending-media'
import { Button } from '../components/UI/Button/Button'
import { Hero } from '../components/Hero/Hero'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { API_MEDIA_TYPE } from '../utils/constants/api'
import { Trending } from '../partials/Trending/Trending'
import { Container } from '../containers/Container/Container'
import { HomePageSkeleton } from '../utils/skeleton/pages/HomePageSkeleton'
import { HeroSkeleton } from '../utils/skeleton/parts/HeroSkeleton'

export const HomePage = () => {
  const { medias, isError, isLoading } = useTrendingMedia(API_MEDIA_TYPE.MOVIE)
  const [cover, setCover] = useState(null)

  useEffect(() => {
    medias && setCover(medias[0])
  }, [medias])

  if (isLoading) return <HomePageSkeleton />

  if (isError) return 'Oops. An error happened. Please, try reloading the page'

  /* eslint-disable react/jsx-closing-tag-location */
  return (
    <>
      {cover
        ? <Hero media={cover}>
          <Link to={`/${cover?.media_type}/${cover?.id}`}>
            <Button>Ver detalles</Button>
          </Link>
        </Hero>
        : <HeroSkeleton />}

      <Container>
        <Trending mediaType={API_MEDIA_TYPE.MOVIE} />
        <Trending mediaType={API_MEDIA_TYPE.TV} />
      </Container>
    </>
  )
}
/* eslint-enable react/jsx-closing-tag-location */
