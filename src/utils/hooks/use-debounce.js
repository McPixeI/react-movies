import { useEffect, useState } from 'react'

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDevouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDevouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}
