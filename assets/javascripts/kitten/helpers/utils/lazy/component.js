import React, { useEffect, useRef, useState } from 'react'
import { LazyObserver } from './observer'

export const LazyLoader = ({ children, ...others }) => {
  const [isVisible, setVisible] = useState(false)
  const lazyComponentRef = useRef(null)

  useEffect(() => {
    LazyObserver.observe(lazyComponentRef.current, () => setVisible(true))

    return () => LazyObserver.unobserve(lazyComponentRef.current)
  }, [])

  return (
    <div ref={lazyComponentRef} {...others}>
      {isVisible && children}
    </div>
  )
}
