import React from 'react'
import { ImageCropper } from './index'

export default {
  title: 'Images/Cropper',
  component: ImageCropper,
  decorators: [
    Story => (
      <div className="story-Container story-Grid story-Grid--large">
        <Story />
      </div>
    ),
  ],
}

export const Default = args => {
  return (
    <div>
      <ImageCropper {...args} />
    </div>
  )
}

export const WithImage = () => {
  return (
    <div>
      <ImageCropper imageSrc="/kitten.jpg" fileName="Steven" />
    </div>
  )
}
