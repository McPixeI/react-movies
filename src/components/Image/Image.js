import PropTypes from 'prop-types'

export const Image = ({
  src,
  alt,
  fallback,
  className,
  ...rest
}) => {
  const handleError = (evt) => {
    const target = evt.currentTarget
    if (fallback) {
      target.src = fallback
    }
    target.alt = ''
    target.className = 'absolute left-0 top-1/3'
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={handleError}
      className={className}
      {...rest}
    />
  )
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  fallback: PropTypes.string,
  className: PropTypes.string
}
