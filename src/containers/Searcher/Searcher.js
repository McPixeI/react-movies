import { SearchIcon, XIcon } from '@heroicons/react/solid'
import { useCallback, useEffect, useRef, useState } from 'react'
import { TextInput } from '../../components/UI/Forms/TextInput/TextInput'
import { useSearchContext } from '../../context/search-context'
import { useDebounce } from '../../utils/hooks/use-debounce'

export const Searcher = (props) => {
  const { query, setQuery, isShown, setIsShown } = useSearchContext()
  const [value, setValue] = useState(query)
  const debouncedValue = useDebounce(value, 500)
  const ref = useRef(null)

  useEffect(() => {
    if (query) {
      setIsShown(true)
    }
  }, [query, setIsShown])

  useEffect(() => {
    setQuery(debouncedValue)
    if (isShown) {
      ref.current.focus()
    }
  }, [isShown, setQuery, debouncedValue])

  const handleToggleClick = useCallback((evt) => {
    setIsShown(!isShown)
    if (isShown) {
      setValue('')
    }
  }, [isShown, setIsShown])

  return (
    <div className='flex items-center '>
      <TextInput
        ref={ref}
        onChange={(evt) => setValue(evt.target.value)}
        name='searchbar'
        size='sm'
        type='search'
        value={value}
        placeholder='Search...'
        className={`transition-all ${isShown ? 'w-60 visible' : 'w-0 px-0 invisible'}`}
      />
      <div
        className='cursor-pointer px-4 ml-2 text-gray-700 hover:text-gray-900 md:p-0 dark:text-gray-400 md:dark:hover:text-white w-6 h-6'
        onClick={handleToggleClick}
      >
        {isShown ? <XIcon /> : <SearchIcon />}
      </div>
    </div>
  )
}
