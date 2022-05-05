import { StarIcon } from '@heroicons/react/solid'
import { StarIcon as StarIconOutline } from '@heroicons/react/outline'
import clsx from 'clsx'

export const Rating = ({ count, className }) => {
  const filledStars = parseInt(count) * 5 / 10

  const classes = clsx('flex items-center', className)

  return (
    <div className={classes}>
      {
        [...new Array(5)].map((val, i) => {
          if (i <= filledStars - 1) {
            return <StarIcon className='w-6 h-6 text-primary' />
          } else {
            return <StarIconOutline className='w-5 h-5 text-primary' />
          }
        })
}
    </div>
  )
}
