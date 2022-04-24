import { useQuery } from 'react-query'
import axios from 'axios'
import { API_KEY, API_BASE_PATH } from '../utils/constants/api'

const placeholderData = Array.from({ length: 8 }, (v, index) => ({
  id: `loading-media-${index}`,
  title: 'Loading...',
  name: 'Loading...'
}))

const getMedia = async (mediaType, mediaId) => {
  const { data } = await axios.get(
    `${API_BASE_PATH}/${mediaType}/${mediaId}?api_key=${API_KEY}`
  )
  return data
}

export const useMedia = (mediaType, mediaId) => {
  return useQuery(['media', { mediaId }], () => getMedia(mediaType, mediaId), {
    placeholderData: placeholderData,
    staleTime: 5000
  })
}
