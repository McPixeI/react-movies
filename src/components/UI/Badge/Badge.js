import clsx from 'clsx'
import PropTypes from 'prop-types'

export const Badge = ({
  children,
  variant = 'primary',
  className
}) => {
  const classes = clsx(
    'text-sm font-medium mr-2 px-2.5 py-0.5 rounded-sm',
    { 'bg-indigo-500 text-white dark:bg-indigo-700 dark:text-indigo-100': variant === 'primary' },
    { 'bg-gray-500 text-white dark:bg-gray-700 dark:text-gray-300': variant === 'secondary' },
    className
  )
  return (
    <span className={classes}>{children}</span>
  )
}

Badge.propTypes = {
  children: PropTypes.any,
  variant: PropTypes.oneOf(['primary', 'secondary'])
}
