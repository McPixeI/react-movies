import { Spinner } from '../components/UI/Spinner/Spinner'
import STATUSES from '../utils/constants/statuses'
import { useParams } from 'react-router-dom'
import { useMedia } from '../queries/use-media'

export const MediaPage = ({ children }) => {
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
      <h1>{`${data.title || data.name} details`}</h1>
    </>
  )
}
