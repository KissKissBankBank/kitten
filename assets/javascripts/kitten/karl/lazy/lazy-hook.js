import React, { useEffect, useRef, useState } from 'react'
import useLazyObserver from '../../helpers/utils/lazy-hook'

const LazyHook = ({ children, ...others }) => {
  const lazyComponentRef = useRef(null)
  const isVisible = useLazyObserver(lazyComponentRef)

  return <div ref={lazyComponentRef}>{isVisible && children}</div>
}

export default LazyHook
