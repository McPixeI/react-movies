import { SearchIcon, XIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import { TextInput } from '../../components/UI/Forms/TextInput/TextInput'

export const Searcher = (props) => {
  const [isShown, setIsShown] = useState(false)
  const handleSubmit = (evt) => {
    evt.preventDefault()
    console.log(evt.target.searchbar.value)
  }
  return (
    <div className='flex items-center '>
      <form onSubmit={handleSubmit}>
        <TextInput
          name='searchbar'
          size='sm'
          type='search'
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
