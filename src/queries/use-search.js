import { useInfiniteQuery } from 'react-query'
import axios from 'axios'
import { API_KEY, API_BASE_PATH } from '../utils/constants/api'

/* const placeholderData = Array.from({ length: 8 }, (v, index) => ({
  id: `loading-popular-${index}`,
  title: 'Loading...',
  name: 'Loading...'
})) */

const getSearch = async (query, pageParam = 1) => {
  const data = await axios.get(
    `${API_BASE_PATH}/search/multi?api_key=${API_KEY}&query=${query}&page=${pageParam}`
  ).then(res => res.data)
  return data
}

export const useSearch = (query) => {
  const result = useInfiniteQuery(['popular-media', { query }], ({ pageParam = 1 }) => getSearch(query, pageParam), {
    enabled: Boolean(query),
    getNextPageParam: (lastPage, allPages) => {
      const maxPages = lastPage.total_pages
      const nextPage = allPages.length + 1
      return nextPage <= maxPages ? nextPage : undefined
    }
  })
  return { ...result, data: result.data }
}
