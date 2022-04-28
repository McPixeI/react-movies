import { useInfiniteQuery } from 'react-query'
import axios from 'axios'
import { API_KEY, API_BASE_PATH } from '../utils/constants/api'
import { useMatch } from 'react-router-dom'

const getSearch = async (query, pageParam = 1) => {
  const data = await axios.get(
    `${API_BASE_PATH}/search/multi?api_key=${API_KEY}&query=${query}&page=${pageParam}`
  ).then(res => res.data)
  console.log(data)
  return data
}

export const useSearch = (query) => {
  const isSearchRoute = useMatch('/search')

  const result = useInfiniteQuery(['search-media', { query }], ({ pageParam = 1 }) => getSearch(query, pageParam), {
    enabled: Boolean(isSearchRoute && query.length > 0),
    getNextPageParam: (lastPage, allPages) => {
      const maxPages = lastPage.total_pages
      const nextPage = allPages.length + 1
      return nextPage <= maxPages ? nextPage : undefined
    }
  })
  return { ...result, data: result.data }
}
