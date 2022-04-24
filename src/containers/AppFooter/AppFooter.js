export const AppFooter = () => {
  return (
    <footer className='p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-bgdark'>
      <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>© {new Date().getFullYear()}
        <a href='/' className='hover:underline'>React Movies author™</a>
        . All Rights Reserved.
        <p>Built by BLABLALBA... Data provided by TMDB</p>
      </span>
      <ul className='flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0'>
        <li>
          <a href='/' className='mr-4 hover:underline md:mr-6 '>Lorem</a>
        </li>
        <li>
          <a href='/' className='mr-4 hover:underline md:mr-6'>Ipsum</a>
        </li>
      </ul>
    </footer>
  )
}
