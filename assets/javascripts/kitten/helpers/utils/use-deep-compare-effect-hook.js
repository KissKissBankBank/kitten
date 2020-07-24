import { useRef, useEffect } from 'react'
import isEqual from 'lodash/fp/isEqual'
const useDeepCompareMemoize = value => {
  const ref = useRef()
  if (!isEqual(value, ref.current)) {
    ref.current = value
  }
  return ref.current
}
export const useDeepCompareEffect = (callback, dependencies) =>
  useEffect(callback, useDeepCompareMemoize(dependencies))
