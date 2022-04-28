import { SearchIcon, XIcon } from '@heroicons/react/solid'
import { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { TextInput } from '../../components/UI/Forms/TextInput/TextInput'
import { useSearchContext } from '../../context/search-context'
import { useOutsideClick } from '../../utils/hooks/use-outside-click'
import { useDebounce } from '../../utils/hooks/use-debounce'

export const Searcher = () => {
  const { setQuery } = useSearchContext()
  const [isShown, setIsShown] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const debouncedValue = useDebounce(inputValue, 500)
  const navigate = useNavigate()
  const searchbarRef = useRef()
  const inputRef = useRef()

  useEffect(() => {
    if (inputValue.length > 0) setQuery(debouncedValue)
    isShown && inputRef.current.focus()
  }, [isShown, setQuery, debouncedValue, inputValue])

  useOutsideClick(searchbarRef, () => {
    if (isShown) {
      setInputValue('')
      setIsShown(false)
    }
  })

  const handleSearchInput = (event) => {
    const { value } = event.target
    setInputValue(value)
    // setQuery(value)
    if (value.length > 0) {
      navigate(`/search?q=${value}`)
    } else {
      navigate('/')
    }
  }

  return (
    <div className='flex items-center' ref={searchbarRef}>
      <TextInput
        ref={inputRef}
        value={inputValue}
        onChange={handleSearchInput}
        name='searchbar'
        size='sm'
        type='search'
        placeholder='Search...'
        className={`transition-all ${isShown ? 'w-60 visible' : 'w-0 px-0 invisible'}`}
      />
      <div
        className='cursor-pointer px-4 ml-2 text-gray-700 hover:text-gray-900 md:p-0 dark:text-gray-400 md:dark:hover:text-white w-6 h-6'
        type='button'
        onClick={() => setIsShown(!isShown)}
      >
        {/* The pointer events none avoids detect click on svg and only on parent div */}
        {isShown ? <XIcon className='pointer-events-none' /> : <SearchIcon className='pointer-events-none' />}
      </div>
    </div>
  )
}
