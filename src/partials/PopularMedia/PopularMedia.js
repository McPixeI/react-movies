import React from 'react'
import { useInView } from 'react-intersection-observer'
import { ErrorBox } from '../../components/ErrorBox/ErrorBox'
import { MediaItem } from '../../components/MediaItem/MediaItem'
import { Spinner } from '../../components/UI/Spinner/Spinner'
import { Container } from '../../containers/Container/Container'
import { usePopularMedia } from '../../queries/use-popular-media'
import { useSkeleton } from '../../utils/hooks/use-skeleton'
import { MediaItemSkeleton } from '../../utils/skeleton/parts/MediItemSkeleton'

export const PopularMedia = ({ mediaType }) => {
  const skeleton = useSkeleton(10, 'media')
  const {
    data,
    isLoading,
    isSuccess,
    isError,
    isFetchingNextPage,
    fetchNextPage
  } = usePopularMedia(mediaType)

  const { ref, inView } = useInView()

  React.useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
  }, [inView, fetchNextPage])

  const titleType = mediaType === 'movie' ? 'movies' : 'TV shows'

  return (
    <Container>
      <h1 className='text-3xl font-semibold mb-6'>{`Popular ${titleType}`}</h1>

      <div className='mx-auto pt-2 pb-4 lg:max-w-7xl'>
        {isError && <ErrorBox type='movies' />}
        <div className='mt-6 grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-4 lg:grid-cols-5 xl:gap-x-8'>
          {isLoading && skeleton.map(skeleton => <MediaItemSkeleton key={skeleton.id} />)}
          {isSuccess && data.pages.map(page => (
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
    </Container>
  )
}
