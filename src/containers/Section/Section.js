import clsx from 'clsx'
import PropTypes from 'prop-types'

export const Section = ({ title, children, className }) => {
  const classes = clsx('container mx-auto py-4 my-4', className)
  return (
    <section className={classes}>
      {title && <h2 className='text-3xl font-semibold mb-6'>{title}</h2>}
      {children}
    </section>
  )
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any.isRequired
}
