import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { MediaItem } from '../components/MediaItem/MediaItem'
import Spinner from '../components/UI/Spinner'
import { Container } from '../containers/Container/Container'
import { useSearchContext } from '../context/search-context'
import { API_MEDIA_TYPE } from '../utils/constants/api'

export const SearchPage = () => {
  const { ref, inView } = useInView()

  const {
    query,
    data,
    status,
    error,
    isFetchingNextPage,
    fetchNextPage
  } = useSearchContext()

  useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
  }, [inView, fetchNextPage])

  if (status === 'error') return <span>Error: {error.message}</span>
  /* eslint-disable react/jsx-closing-tag-location */
  return (
    <Container className='min-h-[90vh]'>
      <h1 className='text-3xl font-semibold mb-6'>Search results for:
        <span className='text-primary block'>{query?.toLowerCase()}</span>
      </h1>
      {status === 'loading'
        ? <Spinner align='center' />
        : <>
          <div className='mx-auto pt-2 pb-4 lg:max-w-7xl'>
            <div className='mt-6 grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-4 lg:grid-cols-5 xl:gap-x-4'>
              {data?.pages.map(page => (
                <React.Fragment key={page.page}>
                  {page.total_pages === 0
                    ? 'No results...'
                    : page.results
                      .filter(media => media.media_type !== API_MEDIA_TYPE.PERSON)
                      .map(media => (
                        <MediaItem key={media.id} media={media} />
                      ))}
                </React.Fragment>
              ))}
              <div>
                <div id='intersection-trigger' ref={ref} />
              </div>
            </div>
          </div>
          {isFetchingNextPage && <Spinner align='center' />}
        </>}
    </Container>
  )
  /* eslint-enable react/jsx-closing-tag-location */
}
