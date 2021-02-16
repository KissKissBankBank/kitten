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

export const Default = args => (
  <div>
    <ImageCropper {...args} />
  </div>
)

export const WithImage = () => (
  <div>
    <ImageCropper imageSrc="/steven.jpg" fileName="Steven" />
  </div>
)
