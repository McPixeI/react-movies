import clsx from 'clsx'
import PropTypes from 'prop-types'

export const ExtLink = ({ to, label, className }) => {
  const classes = clsx(
    'underline text-sm text-primary hover:opacity-80',
    className
  )

  return (
    <a href={to} target='_blank' rel='noopener noreferrer' className={classes}>
      {label}
    </a>
  )
}

ExtLink.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}
