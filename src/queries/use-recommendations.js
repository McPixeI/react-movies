import { useQuery } from 'react-query'
import axios from 'axios'
import { API_KEY, API_BASE_PATH } from '../utils/constants/api'

const getRecommendations = async (mediaType, mediaId) => {
  const data = await axios.get(
    `${API_BASE_PATH}/${mediaType}/${mediaId}/recommendations?api_key=${API_KEY}`
  ).then(res => res.data.results)
  return data
}

export const useRecommendations = (mediaType, mediaId) => {
  const result = useQuery(['recommendations', { mediaId }], () => getRecommendations(mediaType, mediaId), {
    staleTime: 5000
  })
  return { ...result, medias: result.data }
}
