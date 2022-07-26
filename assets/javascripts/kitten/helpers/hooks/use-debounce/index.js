import { useState, useEffect } from 'react'

export const useDebounce = (value, msDelay) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), msDelay)

    return () => clearTimeout(handler)
  }, [value])

  return debouncedValue
}
