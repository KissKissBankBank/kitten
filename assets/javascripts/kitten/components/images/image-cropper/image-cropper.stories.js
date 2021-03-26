import React from 'react'
import { ImageCropper } from './index'

export default {
  title: 'Images/Cropper',
  component: ImageCropper,
}

export const Default = args => {
  return (
    <div className="k-u-margin-vertical-quadruple k-u-margin-horizontal-quadruple">
      <ImageCropper {...args} />
    </div>
  )
}

export const WithImage = () => {
  return (
    <div className="k-u-margin-vertical-quadruple k-u-margin-horizontal-quadruple">
      <ImageCropper imageSrc="/kitten.jpg" fileName="Steven" />
    </div>
  )
}
