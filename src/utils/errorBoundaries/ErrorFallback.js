
export const ErrorFallback = ({ error }) => {
  return (
    <div
      role='alert'
      className='flex flex-col items-center justify-center h-[90vh]'
    >
      <p className='block text-base mb-2'>Oops... There was a problem. Try again refreshing de app.</p>
      <p className='text-base text-red-600'>{error.message}</p>
    </div>
  )
}
