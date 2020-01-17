import { useEffect } from 'react'

const useContinuousIntersectionObserver = ({
  observedComponentRef,
  onIntersect = () => {},
  root = null,
  rootMargin = '0px',
  threshold = 1.0,
}) => {
  useEffect(() => {
    if (
      !observedComponentRef ||
      (observedComponentRef && !observedComponentRef.current)
    ) {
      console.warn(
        'observedComponentRef.current does not exist, useContinuousIntersectionObserver will return true',
      )
      return
    }

    const observer = new IntersectionObserver(onIntersect, {
      root: root && root.current,
      rootMargin,
      threshold,
    })

    observer.observe(observedComponentRef.current)

    return () => observer.unobserve(observedComponentRef.current)
  }, [])
}

export default useContinuousIntersectionObserver
