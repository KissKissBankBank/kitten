import React, { useRef } from 'react'
import { useLazyObserver } from '../helpers/hooks/use-lazy-observer'

export const withLazy = WrappedComponent => props => {
  const lazyComponentRef = useRef(null)
  const isLazyTriggered = useLazyObserver(lazyComponentRef)

  return (
    <>
      <div ref={lazyComponentRef} />
      <WrappedComponent {...props} isLazyTriggered={isLazyTriggered} />
    </>
  )
}
