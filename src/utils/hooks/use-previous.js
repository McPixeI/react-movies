import { useRef, useEffect } from 'react'

const usePrevious = (value) => {
  const prev = useRef(value)
  useEffect(() => {
    prev.current = value
  })
  return prev.current
}

export { usePrevious }
