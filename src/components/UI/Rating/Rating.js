import { StarIcon } from '@heroicons/react/solid'
import { StarIcon as StarIconOutline } from '@heroicons/react/outline'

export const Rating = ({ count }) => {
  const filledStars = parseInt(count) * 5 / 10
  return [...new Array(5)].map((val, i) => {
    if (i <= filledStars - 1) {
      return <StarIcon className='w-6 h-6 text-primary' />
    } else {
      return <StarIconOutline className='w-5 h-5 text-primary' />
    }
  })
}
