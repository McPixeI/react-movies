export const DetailsSkeleton = () => {
  return (
    <div className='mx-auto flex flex-wrap opacity-60 animate-pulse'>
      <div className='sm:w-1/4 aspect-[2/3] bg-gray-700 dark:bg-gray-700' />
      <div className='sm:w-3/4 w-full sm:pl-10 sm:py-6 mt-6 sm:mt-0'>
        <div className='text-sm title-font text-gray-500 tracking-widest' />
        <div className='h-2.5 bg-gray-700 dark:bg-gray-700 rounded w-20 mb-2' />
        <div className='h-6 w-48 bg-gray-700 dark:bg-gray-700 rounded mb-3' />
        <div className='flex mb-10 items-center'>
          <div className='h-5 bg-gray-700 dark:bg-gray-700 rounded w-16 mb-2 mr-2' />
          <div className='h-5 bg-gray-700 dark:bg-gray-700 rounded w-16 mb-2 mr-2' />
          <div className='h-5 bg-gray-700 dark:bg-gray-700 rounded w-16 mb-2 mr-2' />
        </div>
        <ul>
          <li className='h-5 bg-gray-700 dark:bg-gray-700 rounded w-52 mb-3 mr-2' />
          <li className='h-5 bg-gray-700 dark:bg-gray-700 rounded w-40 mb-3 mr-2' />
          <li className='h-5 bg-gray-700 dark:bg-gray-700 rounded w-40 mb-3 mr-2' />
          <li className='h-5 bg-gray-700 dark:bg-gray-700 rounded w-48 mb-3 mr-2' />
          <li className='h-5 bg-gray-700 dark:bg-gray-700 rounded w-96 mb-3 mr-2' />
        </ul>
      </div>
    </div>
  )
}
