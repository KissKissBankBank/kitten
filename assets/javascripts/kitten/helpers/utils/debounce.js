import { useState, useEffect } from 'react'

export const useDebounce = (value, msDelay) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), msDelay)

    return () => clearTimeout(handler)
  }, [value])

  return debouncedValue
}

export const debounce = (fn, msDelay) => {
  let inDebounce

  return () => {
    const context = this
    const args = arguments

    clearTimeout(inDebounce)

    inDebounce = setTimeout(() => fn.apply(context, args), msDelay)
  }
}
