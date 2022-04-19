export const Toggle = ({ children }) => {
  return (
    <>
      <label
        htmlFor='toggle-example'
        class='flex relative items-center mb-4 cursor-pointer'
      >
        <input type='checkbox' id='toggle-example' className='sr-only' />
        <div className='w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-bg dark:bg-gray-700 dark:border-gray-600' />
        <span className='ml-3 text-sm font-medium text-gray-900 dark:text-gray-300'>
          Toggle me
        </span>
      </label>
    </>
  )
}
