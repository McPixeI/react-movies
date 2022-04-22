import { useQuery } from 'react-query'
import axios from 'axios'
import { API_KEY, API_BASE_PATH } from '../utils/constants/api'

const getReommendations = async (mediaType, mediaId) => {
  const { data } = await axios.get(
    `${API_BASE_PATH}/${mediaType}/${mediaId}/recommendations?api_key=${API_KEY}`
  )
  return data
}

export const useRecommendations = (mediaType, mediaId) => {
  return useQuery(['recommendations', { mediaId }], () => getReommendations(mediaType, mediaId), {
    keepPreviousData: true,
    staleTime: 5000
  })
}
