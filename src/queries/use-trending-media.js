import { useQuery } from 'react-query'
import axios from 'axios'
import { API_KEY, API_BASE_PATH } from '../utils/constants/api'

const getTrendingMedia = async () => {
  const data = await axios.get(
    `${API_BASE_PATH}/trending/all/day?api_key=${API_KEY}`
  ).then(res => res.data.results)
  return data
}

export const useTrendingMedia = () => {
  const result = useQuery(['trending-media'], () => getTrendingMedia(), {
    keepPreviousData: true,
    staleTime: 5000
  })
  return { ...result, medias: result.data }
}
