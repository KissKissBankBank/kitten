import React from 'react'
import withLazy from '../../hoc/with-lazy'

const ImgWithLazy = ({ isLazyTriggered, imgSrc, width, height }) => (
  <img
    src={isLazyTriggered ? imgSrc : undefined}
    width={width}
    height={height}
    style={{ background: '#eee' }}
  />
)

export default withLazy(ImgWithLazy)
