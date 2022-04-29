import PropTypes from 'prop-types'

export const Section = ({ title, children }) => {
  return (
    <section className='container mx-auto py-4 my-4'>
      {title && <h2 className='text-3xl font-semibold mb-6'>{title}</h2>}
      {children}
    </section>
  )
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any.isRequired
}
