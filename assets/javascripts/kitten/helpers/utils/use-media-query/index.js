import { useState, useEffect } from 'react'
import domElementHelper from '../../dom/element-helper'

// https://usehooks.com/useMedia/
export const useMedia = ({ queries, values, defaultValue }) => {
  if (!domElementHelper.canUseDom()) return defaultValue

  const mediaQueryLists = queries.map(q => window.matchMedia(q))

  const getValue = () => {
    const index = mediaQueryLists.findIndex(mql => mql.matches)
    return typeof values[index] !== 'undefined' ? values[index] : defaultValue
  }

  const [value, setValue] = useState(getValue)

  useEffect(() => {
    const handler = () => setValue(getValue)
    mediaQueryLists.forEach(mql => mql.addListener(handler))
    return () => mediaQueryLists.forEach(mql => mql.removeListener(handler))
  }, [])

  return value
}
