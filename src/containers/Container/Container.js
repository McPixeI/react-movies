import clsx from 'clsx'

export const Container = ({ children, className }) => {
  const classes = clsx('container mx-auto px-4 my-8 mt-10 md:mt-20', className)
  return (
    <div className={classes}>
      {children}
    </div>
  )
}
