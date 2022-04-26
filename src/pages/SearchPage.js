import { navigate } from '@storybook/addon-links'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { MediaItem } from '../components/MediaItem/MediaItem'
import Spinner from '../components/UI/Spinner'
import { Container } from '../containers/Container/Container'
import { useSearchContext } from '../context/search-context'

export const SearchPage = (props) => {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q')
  const { ref, inView } = useInView()
  const navigate = useNavigate()

  const {
    query: contextQuery,
    setIsShown,
    data,
    status,
    error,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage
  } = useSearchContext(query)

  useEffect(() => {
    if (!contextQuery) {
      setIsShown(false)
      navigate('/')
    }
  }, [contextQuery, navigate, setIsShown])

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
        <div className='mt-6 grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-4 lg:grid-cols-5 xl:gap-x-8'>
          {data?.pages.map(page => (
            <React.Fragment key={page.page}>
              {page.results.map(media => (
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
