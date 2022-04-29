import { Spinner } from '../components/UI/Spinner/Spinner'
import { STATUSES } from '../utils/constants/statuses'
import { useParams } from 'react-router-dom'
import { useMedia } from '../queries/use-media'
import { Hero } from '../components/Hero/Hero'
import { Cast } from '../partials/Cast/Cast'
import { Recommended } from '../partials/Recommended/Recommended'
import { Details } from '../partials/Details/Details'

export const MediaPage = () => {
  const { mediaType, mediaId } = useParams()

  const { data, status } = useMedia(mediaType, mediaId)

  console.log(data)

  if (status === STATUSES.LOADING) {
    return <Spinner />
  }

  if (status === STATUSES.ERROR) {
    return 'Error'
  }

  return (
    <>
      <Hero media={data} />
      <Details mediaId={mediaId} mediaType={mediaType} />
      <Cast mediaId={mediaId} mediaType={mediaType} />
      <Recommended mediaId={mediaId} mediaType={mediaType} />
    </>
  )
}
