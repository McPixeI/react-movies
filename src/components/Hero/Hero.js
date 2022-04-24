export const Hero = ({ children, ...rest }) => {
  return (
    <div className='w-full min-h-[400px] md:min-h-[520px] relative overflow-hidden mx-auto flex flex-col md:flex-row items-center py-12 md:py-24' {...rest}>
      <div className='absolute bg-gradient-to-t from-bgdark bg-opacity-50 inset-0' />
      <div className='container mx-auto z-10'>
        <div className=' flex flex-col w-full lg:w-1/2 justify-center items-start pt-12 pb-20'>
          {children}
        </div>
      </div>
    </div>
  )
}
