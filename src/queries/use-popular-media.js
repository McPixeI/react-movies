import { useInfiniteQuery } from 'react-query'
import axios from 'axios'
import { API_KEY, API_BASE_PATH } from '../utils/constants/api'

const getPopularMedia = async (mediaType, pageParam = 1) => {
  const data = await axios.get(
    `${API_BASE_PATH}/${mediaType}/popular?api_key=${API_KEY}&page=${pageParam}`
  ).then(res => res.data)
  return data
}

export const usePopularMedia = (mediaType) => {
  const result = useInfiniteQuery(['popular-media', { mediaType }], ({ pageParam = 1 }) => getPopularMedia(mediaType, pageParam), {
    getNextPageParam: (lastPage, allPages) => {
      const maxPages = lastPage.total_pages
      const nextPage = allPages.length + 1
      return nextPage <= maxPages ? nextPage : undefined
    }
  })
  return { ...result, data: result.data }
}
