import React from 'react'
import { ImageCropper } from './index'

export default {
  title: 'Images/Cropper',
  component: ImageCropper,
}

export const Default = args => (
  <div className="story-Container story-Grid story-Grid--large">
    <div>
      <ImageCropper {...args} />
    </div>
  </div>
)

export const WithImage = () => (
  <div className="story-Container story-Grid story-Grid--large">
    <div>
      <ImageCropper imageSrc="/steven.jpg" fileName="Steven" />
    </div>
  </div>
)
