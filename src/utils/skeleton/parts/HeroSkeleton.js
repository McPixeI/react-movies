export const HeroSkeleton = () => {
  return (
    <div
      className='opacity-60 animate-pulse w-full h-[40vh] md:h-[50vh] relative overflow-hidden mx-auto flex flex-col md:flex-row items-center py-12 md:py-24 mb-10 bg-gray-700 dark:bg-gray-700'
    >
      <div className='absolute bg-gradient-to-t from-bgdark bg-opacity-50 inset-0' />
      <div className='container mx-auto z-10'>
        <div className=' flex flex-col w-full lg:w-1/2 justify-center items-start px-4 pt-12 pb-20'>
          <div className='h-7 w-56 bg-gray-700 dark:bg-gray-700 rounded mb-8' />
          <div className='h-4 w-96 bg-gray-700 dark:bg-gray-700 rounded mb-2' />
          <div className='h-4 w-96 bg-gray-700 dark:bg-gray-700 rounded mb-2' />
          <div className='h-4 w-80 bg-gray-700 dark:bg-gray-700 rounded mb-2' />
        </div>
      </div>
    </div>
  )
}
