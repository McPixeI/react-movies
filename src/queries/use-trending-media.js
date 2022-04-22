import { useQuery } from 'react-query'
import axios from 'axios'
import { API_KEY, API_BASE_PATH } from '../utils/constants/api'

const getTrendingMedia = async page => {
  const { data } = await axios.get(
    `${API_BASE_PATH}/trending/all/day?page=${page}&api_key=${API_KEY}`
  )
  return data
}

export const useTrendingMedia = page => {
  return useQuery(['trending-media', { page }], () => getTrendingMedia(page), {
    keepPreviousData: true,
    staleTime: 5000
  })
}
