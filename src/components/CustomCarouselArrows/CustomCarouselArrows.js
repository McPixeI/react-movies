
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'

export const CustomLeftArrow = ({ onClick }) => (
  <div
    onClick={() => onClick()}
    className='flex absolute w-16 h-full left-0 cursor-pointer bg-gradient-to-r from-white/70 dark:from-bgdark'
  >
    <ChevronLeftIcon
      className='opacity-50 text-gray-700 dark:text-indigo-100 hover:opacity-80'
    />
  </div>

)
export const CustomRightArrow = ({ onClick }) => (
  <div
    onClick={() => onClick()}
    className='flex absolute w-16 h-full right-0 cursor-pointer bg-gradient-to-l from-white/70 dark:from-bgdark '
  >
    <ChevronRightIcon
      className='opacity-50 text-gray-700 dark:text-indigo-100 hover:opacity-80'
    />
  </div>
)
