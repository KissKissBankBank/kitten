import React from 'react'
import { ImageCropper } from './index'

export default {
  title: 'Images/Cropper',
  component: ImageCropper,
}

export const Default = args => {
  return <ImageCropper {...args} />
}

export const WithImage = () => {
  return <ImageCropper imageSrc="/steven.jpg" fileName="Steven" />
}
