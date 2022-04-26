import { SearchIcon, XIcon } from '@heroicons/react/solid'
import { useEffect, useRef, useState } from 'react'
import { TextInput } from '../../components/UI/Forms/TextInput/TextInput'
import { createSearchParams, useLocation, useNavigate } from 'react-router-dom'
import { useDebounce } from '../../utils/hooks/use-debounce'
import { usePrevious } from '../../utils/hooks/use-previous'

export const Searcher = (props) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [isShown, setIsShown] = useState(false)
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounce(query, 500)
  const previousDebouncedQuery = usePrevious(debouncedQuery)
  const inputRef = useRef(null)

  useEffect(() => {
    if (
      previousDebouncedQuery !== debouncedQuery &&
      debouncedQuery.length > 0
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
  }, [location.pathname, query, navigate, debouncedQuery, previousDebouncedQuery])

  useEffect(() => {
    if (isShown) {
      inputRef.current.focus()
    } else {
      if (location.pathname === '/search') {
        setQuery('')
        navigate('/')
      }
    }
  }, [isShown, location.pathname, navigate])

  return (
    <div className='flex items-center '>
      <TextInput
        ref={inputRef}
        onChange={(evt) => setQuery(evt.target.value)}
        name='searchbar'
        size='sm'
        type='search'
        value={query}
        placeholder='Search...'
        className={`transition-all ${isShown ? 'w-60 visible' : 'w-0 px-0 invisible'}`}
      />
      <div
        className='cursor-pointer px-4 ml-2 text-gray-700 hover:text-gray-900 md:p-0 dark:text-gray-400 md:dark:hover:text-white w-6 h-6'
        onClick={() => setIsShown(!isShown)}
      >
        {isShown ? <XIcon className='' /> : <SearchIcon className='' />}
      </div>

    </div>
  )
}
