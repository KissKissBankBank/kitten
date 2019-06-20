import React from 'react'
import withLazy from '../../hoc/with-lazy'

const LazyHoc = ({ isLazyTriggered, imgSrc, width, height }) => {
  return <img src={isLazyTriggered && imgSrc} width={width} height={height} />
}

export default withLazy(LazyHoc)
