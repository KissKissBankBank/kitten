import React, { useState } from 'react'
import { boolean } from '@storybook/addon-knobs'
import { ImageDropUploader } from './index'
import { Loader } from '../../../components/atoms/loader'

export default {
  component: ImageDropUploader,
  title: 'Uploaders/ImageDropUploader',
}

export const StatusReady = args => (
  <ImageDropUploader
    {...args}
    id="ImageDropUploader"
    buttonTitle="Upload an image"
    buttonText={(
      <>
        Ratio: 16/10 (800x500px)<br />
        Max size: 5MB<br />
        Format: JPG, PNG, GIF
      </>
    )}
    managerTitle="Frame your image"
    managerText="You can move your image around the frame"
  />
)
