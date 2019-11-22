import { useEffect, useState } from 'react'
import { IntersectionObserverClass } from './intersection-observer'

const useIntersectionObserver = ({ observedComponentRef, options }) => {
  const Observer = new IntersectionObserverClass(options)
  const [withIntersectionObserver, setIntersectionObserver] = useState(false)

  useEffect(() => {
    if (
      !observedComponentRef ||
      (observedComponentRef && !observedComponentRef.current)
    ) {
      console.warn(
        'observedComponentRef.current does not exist, useIntersectionObserver will return true',
      )
      setIntersectionObserver(true)
      return
    }

    Observer.observe(observedComponentRef.current, () =>
      setIntersectionObserver(true),
    )

    return () => Observer.unobserve(observedComponentRef.current)
  }, [])

  return withIntersectionObserver
}

export default useIntersectionObserver
