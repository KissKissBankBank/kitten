import React, { useRef } from 'react'
import useLazyObserver from '../../helpers/utils/lazy-hook'

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
