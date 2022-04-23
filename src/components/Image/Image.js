export const Image = ({
  src,
  alt,
  lazy = true,
  className
}) => {
  const handleError = (evt) => {
    console.log('event image error: ' + evt.target.src)
    // evt.currentTarget.src = fallback
  }

  return (
    <img
      src={src}
      alt={alt}
      // fallback={fallback}
      onError={handleError}
      loading={lazy ? 'lazy' : 'eager'}
      className={className}
    />
  )
}
