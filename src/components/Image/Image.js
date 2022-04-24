import PropTypes from 'prop-types'

export const Image = ({
  src,
  alt,
  fallback,
  lazy = true,
  className
}) => {
  const handleError = (evt) => {
    const target = evt.currentTarget
    target.src = fallback
    target.alt = ''
    target.className = 'absolute left-0 top-1/3'
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={handleError}
      loading={lazy ? 'lazy' : 'eager'}
      className={className}
    />
  )
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  fallback: PropTypes.string.isRequired,
  lazy: PropTypes.bool,
  className: PropTypes.string
}
