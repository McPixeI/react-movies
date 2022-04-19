import clsx from 'clsx'

export const TextInput = ({
  name,
  type,
  size = 'lg',
  placeholder,
  label,
  value,
  error,
  required,
  invalid,
  onChange,
  onBlur,
  className,
  ...rest
}) => {
  const classes = clsx(
    'block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
    'transition duration-300 ease-in-out',
    { 'h-8 px-4': size === 'sm' },
    { 'h-10 px-5': size === 'md' },
    { 'h-12 px-6': size === 'lg' },
    className
  )

  return (
    <>
      {label && (
        <label
          for='large-input'
          class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
        >
          {label}
        </label>
      )}
      <input className={classes} type='text' id='large-input' {...rest} />
    </>
  )
}
