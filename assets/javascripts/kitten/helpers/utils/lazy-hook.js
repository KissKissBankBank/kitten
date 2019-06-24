import { useEffect, useState } from 'react'
import LazyObserver from './lazy-observer'

const useLazyObserver = lazyComponentRef => {
  const [withLazyObserver, setLazyObserver] = useState(false)

  useEffect(() => {
    if (!lazyComponentRef || (lazyComponentRef && !lazyComponentRef.current)) {
      console.warn(
        'lazyComponentRef.current does not exist, useLazyObserver will return true',
      )
      setLazyObserver(true)
      return
    }

    LazyObserver.observe(lazyComponentRef.current, () => setLazyObserver(true))

    return () => LazyObserver.unobserve(lazyComponentRef.current)
  }, [])

  return withLazyObserver
}

export default useLazyObserver
