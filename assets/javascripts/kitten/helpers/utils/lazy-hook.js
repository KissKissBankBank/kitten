import { useEffect, useState } from 'react'
import LazyObserver from './lazy-observer'

const useLazyObserver = lazyComponentRef => {
  const [withLazyObserver, setLazyObserver] = useState(false)

  useEffect(() => {
    const hasNoRef = !lazyComponentRef?.current

    if (hasNoRef) {
      console.warn(
        'lazyComponentRef.current does not exist, useLazyObserver will return true',
      )
      setLazyObserver(true)
      return
    }

    LazyObserver.observe(lazyComponentRef.current, () => setLazyObserver(true))

    return () => {
      if (hasNoRef) return

      LazyObserver.unobserve(lazyComponentRef.current)
    }
  }, [])

  return withLazyObserver
}

export default useLazyObserver
