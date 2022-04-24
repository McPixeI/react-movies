import { Spinner } from '../components/UI/Spinner/Spinner'
import STATUSES from '../utils/constants/statuses'
import { useParams } from 'react-router-dom'
import { useMedia } from '../queries/use-media'
import { Hero } from '../components/Hero/Hero'
import { Button } from '../components/UI/Button/Button'
import { API_IMG_BASE_PATH } from '../utils/constants/api'
import { Cast } from '../partials/Cast/Cast'
import { Recommended } from '../partials/Recommended/Recommended'

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
      <Hero style={{ backgroundImage: `url(${API_IMG_BASE_PATH}/w1280/${data.backdrop_path})`, backgroundSize: 'cover' }}>
        <h1 className='font-bold text-white text-4xl my-4'>{data.title || data.name}</h1>
        <p className='leading-normal mb-4 text-white'>{data.overview}</p>
      </Hero>
      <Cast mediaId={mediaId} mediaType={mediaType} />
      <Recommended mediaId={mediaId} mediaType={mediaType} />
    </>
  )
}
