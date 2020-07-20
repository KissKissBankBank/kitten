import { useEffect, useState } from 'react'
import domElementHelper from '../dom/element-helper'

const getWidth = () => {
  if (!domElementHelper.canUseDom()) return 0

  return (
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth
  )
}

export const useWindowWidth = () => {
  const [width, setWidth] = useState(getWidth())
  useEffect(() => {
    let timeoutId = null

    const handleResize = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => setWidth(getWidth()), 150)
    }

    domElementHelper.canUseDom() &&
      window.addEventListener('resize', handleResize)

    return () => {
      domElementHelper.canUseDom() &&
        window.removeEventListener('resize', handleResize)
    }
  }, [])
  return width
}
