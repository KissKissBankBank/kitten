import { useEffect, useState } from 'react'
import LazyObserver from './lazy-observer'

const useLazyObserver = lazyComponentRef => {
  const [withLazyObserver, setLazyObserver] = useState(false)

  useEffect(() => {
    LazyObserver.observe(lazyComponentRef.current, () => setLazyObserver(true))

    return () => LazyObserver.unobserve(lazyComponentRef.current)
  }, [])

  return withLazyObserver
}

export default useLazyObserver
