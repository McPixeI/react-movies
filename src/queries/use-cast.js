import { useQuery } from 'react-query'
import axios from 'axios'
import { API_KEY, API_BASE_PATH } from '../utils/constants/api'

const getCast = async (mediaType, mediaId) => {
  const data = await axios.get(
    `${API_BASE_PATH}/${mediaType}/${mediaId}/credits?api_key=${API_KEY}`
  ).then(res => res.data.cast)
  return data
}

export const useCast = (mediaType, mediaId) => {
  const result = useQuery(['cast', { mediaType, mediaId }], () => getCast(mediaType, mediaId), {
    staleTime: 5000
  })
  return { ...result, cast: result.data }
}
