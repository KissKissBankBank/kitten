import React, { useRef } from 'react'
import { useLazyObserver } from 'kitten'

const LazyHook = ({ children }) => {
  const lazyComponentRef = useRef(null)
  const isVisible = useLazyObserver(lazyComponentRef)

  return (
    <div ref={lazyComponentRef} style={{ background: '#eee' }}>
      Here: {isVisible && children}
    </div>
  )
}

export default LazyHook
