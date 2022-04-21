import PropTypes from 'prop-types'

function Card ({ children, link }) {
  return (
    <div class='max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
      {link ? <a href={link}>{children}</a> : <>{children}</>}
    </div>
  )
}

function CardHeading ({ children }) {
  return <>{children}</>
}

function CardBody ({ children }) {
  return <div class='p-5'>{children}</div>
}

export { Card, CardHeading, CardBody }

Card.propTypes = {
  children: PropTypes.any,
  link: PropTypes.string
}
