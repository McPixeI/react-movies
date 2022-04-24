import { useQuery } from 'react-query'
import axios from 'axios'
import { API_KEY, API_BASE_PATH } from '../utils/constants/api'

const placeholderData = Array.from({ length: 8 }, (v, index) => ({
  id: `loading-recommendation-${index}`,
  title: 'Loading...',
  name: 'Loading...'
}))

const getReommendations = async (mediaType, mediaId) => {
  const data = await axios.get(
    `${API_BASE_PATH}/${mediaType}/${mediaId}/recommendations?api_key=${API_KEY}`
  ).then(res => res.data.results)
  return data
}

export const useRecommendations = (mediaType, mediaId) => {
  const result = useQuery(['recommendations', { mediaId }], () => getReommendations(mediaType, mediaId), {
    placeholderData: placeholderData,
    staleTime: 5000
  })
  return { ...result, medias: result.data }
}
