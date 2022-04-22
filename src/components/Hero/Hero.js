export const Hero = ({ children, ...rest }) => {
  return (
    <div className='w-full mx-auto flex flex-col md:flex-row items-center py-12 md:py-24' {...rest}>
      <div className='flex flex-col w-full lg:w-1/2 justify-center items-start pt-12 pb-24 px-6'>
        {children}
      </div>
    </div>
  )
}
