import React from 'react'
import { MediaItem } from '../components/MediaItem/MediaItem'
import { usePopularMedia } from '../queries/use-popular-media'
import { API_MEDIA_TYPE } from '../utils/constants/api'
import { Spinner } from '../components/UI/Spinner/Spinner'
import { useInView } from 'react-intersection-observer'
import { Container } from '../containers/Container/Container'

export const MoviesPage = () => {
  const mediaType = API_MEDIA_TYPE.MOVIE

  const {
    status,
    data,
    error,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage
  } = usePopularMedia(mediaType)

  const { ref, inView } = useInView()

  React.useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
  }, [inView, fetchNextPage])

  if (status === 'loading') return <Spinner align='center' />
  if (status === 'error') return <span>Error: {error.message}</span>

  return (
    <Container>
      <h1 className='text-3xl font-semibold mb-6'>Popular movies</h1>
      <div className='mx-auto pt-2 pb-4 lg:max-w-7xl'>
        <div className='mt-6 grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-4 lg:grid-cols-5 xl:gap-x-8'>
          {data.pages.map(page => (
            <React.Fragment key={page.page}>
              {page.results.map(media => (
                <MediaItem key={media.id} media={media} mediaType={mediaType} />
              ))}
            </React.Fragment>
          ))}
          <div>
            <div id='intersection-trigger' ref={ref} />
          </div>
        </div>
      </div>
      {isFetchingNextPage && <Spinner align='center' />}
      {!hasNextPage && 'Nothing more to load'}
    </Container>
  )
}
