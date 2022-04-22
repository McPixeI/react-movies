import PropTypes from 'prop-types'
import clsx from 'clsx'

function Card ({ children, link, className }) {
  const classes = clsx(
    'max-w-sm bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700',
    className
  )
  return (
    <div className={classes}>
      {link ? <a href={link}>{children}</a> : <>{children}</>}
    </div>
  )
}

function CardHeading ({ children, className }) {
  return <div className={className}>{children}</div>
}

function CardBody ({ children, className }) {
  return <div className={`px-4 py-5 ${className}`}>{children}</div>
}

export { Card, CardHeading, CardBody }

Card.propTypes = {
  children: PropTypes.any,
  link: PropTypes.string,
  className: PropTypes.string
}
