import clsx from 'clsx'
import PropTypes from 'prop-types'

export const Image = ({
  src,
  alt,
  fallback,
  className,
  ...rest
}) => {
  const classes = clsx('block w-full object-cover', className)

  const handleError = (evt) => {
    const target = evt.currentTarget
    if (fallback) {
      target.src = fallback
    }
    target.alt = ''
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={handleError}
      className={classes}
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
