import React from 'react'
import { ImageCropper } from './index'
import { select } from '@storybook/addon-knobs'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Molecules/Upload/ImageCropper',
  component: ImageCropper,
  parameters: {
    docs: {
      page: () => (
        <DocsPage filepath={__filename} importString="ImageCropper" />
      ),
    },
  },
  decorators: [
    story => (
      <div className="story-Container story-Grid story-Grid--large">
        {story()}
      </div>
    ),
  ],
}

export const Default = args => {
  return (
    <ImageCropper
      {...args}
      buttonProps={{
        variant: select('Variant', ['andromeda', 'orion'], 'andromeda'),
      }}
    />
  )
}

export const WithImage = () => {
  return (
    <ImageCropper
      imageSrc="/kitten.jpg"
      fileName="Steven Kitten"
      buttonProps={{
        variant: select('Variant', ['andromeda', 'orion'], 'andromeda'),
      }}
    />
  )
}
