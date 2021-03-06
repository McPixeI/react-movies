import { useQuery } from 'react-query'
import axios from 'axios'
import { API_KEY, API_BASE_PATH } from '../utils/constants/api'

const getTrendingMedia = async (mediaType) => {
  const data = await axios.get(
    `${API_BASE_PATH}/trending/${mediaType}/week?api_key=${API_KEY}`
  ).then(res => res.data.results)
  return data
}

export const useTrendingMedia = (mediaType = 'all') => {
  const result = useQuery(['trending-media', { mediaType }], () => getTrendingMedia(mediaType), {
    staleTime: 5000
  })
  return { ...result, medias: result.data }
}
