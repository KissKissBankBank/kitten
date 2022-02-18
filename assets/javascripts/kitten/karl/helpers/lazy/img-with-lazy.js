import React from 'react'
import { withLazy } from 'kitten'

const ImgWithLazy = ({ isLazyTriggered, imgSrc, width, height }) => (
  <img
    src={isLazyTriggered ? imgSrc : undefined}
    width={width}
    height={height}
    style={{ background: '#eee' }}
  />
)

export default withLazy(ImgWithLazy)
