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
}

export const Default = args => {
  return (
    <div className="k-u-margin-vertical-quadruple k-u-margin-horizontal-quadruple">
      <ImageCropper
        {...args}
        buttonProps={{
          variant: select('Variant', ['andromeda', 'orion'], 'andromeda'),
        }}
      />
    </div>
  )
}

export const WithImage = () => {
  return (
    <div className="k-u-margin-vertical-quadruple k-u-margin-horizontal-quadruple">
      <ImageCropper
        imageSrc="/kitten.jpg"
        fileName="Steven Kitten"
        buttonProps={{
          variant: select('Variant', ['andromeda', 'orion'], 'andromeda'),
        }}
      />
    </div>
  )
}
