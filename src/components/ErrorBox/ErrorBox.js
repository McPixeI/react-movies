import { EmojiSadIcon } from '@heroicons/react/solid'

export const ErrorBox = ({ height = 420, type = 'media' }) => {
  return (
    <div role='alert' className={`h-[${height}px] flex items-center justify-center`}>
      <div className='flex flex-col items-center justify-center'>
        <EmojiSadIcon className='w-16 h-16 mb-2' />
        <p className='font-medium'>{`Sorry, we could not find ${type} info`}</p>
      </div>
    </div>
  )
}
