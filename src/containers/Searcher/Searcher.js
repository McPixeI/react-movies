import { SearchIcon, XIcon } from '@heroicons/react/solid'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TextInput } from '../../components/UI/Forms/TextInput/TextInput'
import { useSearchContext } from '../../context/search-context'
import { useOutsideClick } from '../../utils/hooks/use-outside-click'
import { useDebounce } from '../../utils/hooks/use-debounce'

export const Searcher = () => {
  const { setQuery, isShown, setIsShown } = useSearchContext()
  const [inputValue, setInputValue] = useState('')
  const debouncedValue = useDebounce(inputValue, 500)
  const navigate = useNavigate()
  const searchbarRef = useRef()
  const inputRef = useRef()

  useEffect(() => {
    if (inputValue.length > 0) {
      setQuery(debouncedValue)
    }
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
    if (value.length > 0) {
      navigate(`/search?q=${value}`)
    } else {
      navigate('/')
    }
  }

  return (
    <div className='flex items-center md:mr-6' ref={searchbarRef}>
      <TextInput
        ref={inputRef}
        value={inputValue}
        onChange={handleSearchInput}
        name='searchbar'
        size='sm'
        type='search'
        placeholder='Search movies or shows...'
        className={`absolute w-full top-0 left-0 py-6 z-50 rounded-none md:rounded-md md:py-4 md:top-0 md:relative ${isShown ? ' top-[74px] md:w-60 visible ' : 'md:w-0 invisible'}`}
      />
      <div
        className='cursor-pointer px-2 ml-2 text-gray-700 hover:text-gray-900 md:p-0 dark:text-gray-400 md:dark:hover:text-white '
        type='button'
        onClick={() => setIsShown(!isShown)}
      >
        {/* The pointer-events-none avoids detect click on svg and only on parent div */}
        {isShown ? <XIcon className='pointer-events-none w-6 h-6' /> : <SearchIcon className='pointer-events-none w-6 h-6' />}
      </div>
    </div>
  )
}
