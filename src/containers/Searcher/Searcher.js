import { SearchIcon, XIcon } from '@heroicons/react/solid'
import { useCallback, useEffect, useState } from 'react'
import { TextInput } from '../../components/UI/Forms/TextInput/TextInput'
import { createSearchParams, useLocation, useNavigate } from 'react-router-dom'
import { useSearch } from '../../queries/use-search'
import { useDebounce } from '../../utils/hooks/use-debounce'

export const Searcher = (props) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [isShown, setIsShown] = useState(false)
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounce(query, 500)

  useEffect(() => {
    if (debouncedQuery.length > 0
    ) {
      if (location.pathname !== 'search') {
        navigate({
          pathname: 'search',
          search: createSearchParams({
            q: query
          }).toString()
        })
      } else if (query !== debouncedQuery) {
        setQuery(debouncedQuery)
      }
    }
  }, [location.pathname, query, navigate, debouncedQuery])

  const handleChange = useCallback((evt) => {
    setQuery(evt.target.value)
  }, [])

  return (
    <div className='flex items-center '>
      <form>
        <TextInput
          onChange={handleChange}
          name='searchbar'
          size='sm'
          type='search'
          value={query}
          placeholder='Search...'
          className={`inline transition-all ${isShown ? 'w-64 visible' : 'w-0 px-0 invisible'}`}
        />
      </form>

      <button
        className='px-4 ml-2 text-gray-700 hover:text-gray-900 md:p-0 dark:text-gray-400 md:dark:hover:text-white w-6 h-6'
        onClick={() => setIsShown(!isShown)}
      >
        {isShown ? <XIcon className='' /> : <SearchIcon className='' />}
      </button>

    </div>
  )
}
