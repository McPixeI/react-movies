import { Spinner } from '../components/UI/Spinner/Spinner'
import { STATUSES } from '../utils/constants/statuses'
import { useParams } from 'react-router-dom'
import { useMedia } from '../queries/use-media'
import { Hero } from '../components/Hero/Hero'
import { Cast } from '../partials/Cast/Cast'
import { Recommended } from '../partials/Recommended/Recommended'

export const MediaPage = () => {
  const { mediaType, mediaId } = useParams()

  console.log(useParams())

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
      <Cast mediaId={mediaId} mediaType={mediaType} />
      <Recommended mediaId={mediaId} mediaType={mediaType} />
    </>
  )
}
