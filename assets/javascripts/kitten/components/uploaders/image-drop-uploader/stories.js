import React, { useState } from 'react'
import { boolean } from '@storybook/addon-knobs'
import { ImageDropUploader } from './index'
import { Loader } from '../../../components/atoms/loader'

export default {
  component: ImageDropUploader,
  title: 'Uploaders/ImageDropUploader',
}

export const StatusReady = () => (
  <ImageDropUploader
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
    onChange={(e) => console.warn(e)}
  />
)

export const StatusManage = () => (
  <ImageDropUploader
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
    initialValue="/kitten.jpg"
    initialCrop={{ height: 592, width: 948, x: 0, y: 265 }}
    onChange={(e) => console.warn(e)}
  />
)
