import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useSearchParams } from 'react-router-dom'
import { MediaItem } from '../components/MediaItem/MediaItem'
import Spinner from '../components/UI/Spinner'
import { Container } from '../containers/Container/Container'
import { useSearchContext } from '../context/search-context'
import { API_MEDIA_TYPE } from '../utils/constants/api'

export const SearchPage = (props) => {
  const { ref, inView } = useInView()
  const [params] = useSearchParams()
  const queryString = params.get('q')

  const {
    query,
    setQuery,
    data,
    status,
    error,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage
  } = useSearchContext()

  /* MEMO: If user enters search directly by URL */
  useEffect(() => {
    if (queryString) {
      setQuery(queryString)
    }
  }, [queryString, setQuery])

  useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
  }, [inView, fetchNextPage])

  if (status === 'loading') return <Spinner align='center' />
  if (status === 'error') return <span>Error: {error.message}</span>

  return (
    <Container>
      <h1 className='text-3xl font-semibold mb-6'>{`Search results for: ${query}`}</h1>
      <div className='mx-auto pt-2 pb-4 lg:max-w-7xl'>
        <div className='mt-6 grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-4 lg:grid-cols-5 xl:gap-x-4'>
          {data?.pages.map(page => (
            <React.Fragment key={page.page}>
              {page.results
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
      {!hasNextPage && <p className='text-center'>No more results</p>}
    </Container>
  )
}
