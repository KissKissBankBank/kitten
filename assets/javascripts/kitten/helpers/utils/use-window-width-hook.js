import { useEffect, useState } from 'react'

const getWidth = () =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth

export const useWindowWidth = () => {
  const [width, setWidth] = useState(getWidth())
  useEffect(() => {
    let timeoutId = null
    const handleResize = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => setWidth(getWidth(), 150))
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return width
}
