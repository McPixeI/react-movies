import { useQuery } from 'react-query'
import axios from 'axios'
import { API_KEY, API_BASE_PATH } from '../utils/constants/api'

const getCast = async (mediaType, mediaId) => {
  const { data } = await axios.get(
    `${API_BASE_PATH}/${mediaType}/${mediaId}/credits?api_key=${API_KEY}`
  )
  return data
}

export const useCast = (mediaType, mediaId) => {
  return useQuery(['cast', { mediaId }], () => getCast(mediaType, mediaId), {
    keepPreviousData: true,
    staleTime: 5000
  })
}
