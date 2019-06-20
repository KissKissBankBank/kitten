import React, { useRef } from 'react'
import useLazyObserver from '../../helpers/utils/lazy-hook'

const withLazy = WrappedComponent => props => {
  const lazyComponentRef = useRef(null)
  const isLazyTriggered = useLazyObserver(lazyComponentRef)

  return (
    <>
      <div ref={lazyComponentRef} />
      <WrappedComponent isLazyTriggered={isLazyTriggered} {...props} />
    </>
  )
}

export default withLazy
