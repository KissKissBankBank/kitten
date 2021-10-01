import React from 'react'
import { ImageCropper } from './index'
import { DocsPage } from 'storybook/docs-page'
import { action } from '@storybook/addon-actions'

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
  args: {
    name: 'picture',
    imageSrc: undefined,
    fileName: undefined,
    uploaderErrorLabel: 'There was an error on upload.',
    aspectRatio: 16 / 9,
    maxSize: 5 * 1024 * 1024, // 5 Mo.
    acceptedFiles: '.jpg,.jpeg,.gif,.png',
    label: 'Image Cropper Label',
    cropperInfo: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris.',
    sliderTitle: 'Nullam quis risus eget urna mollis ornare vel eu leo.',
    buttonLabel: 'Lorem ipsum ',
    description:
      'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
    disabled: false,
    isCropEnabled: true,
    onChange: action('onChange'),
    onUpload: action('onUpload'),
    buttonProps: {},
  },
  argTypes: {
    name: { control: 'text' },
    imageSrc: { control: 'text' },
    fileName: { control: 'text' },
    uploaderErrorLabel: { control: 'text' },
    aspectRatio: { control: 'number' },
    maxSize: { control: 'number' },
    acceptedFiles: { control: 'text' },
    label: { control: 'text' },
    cropperInfo: { control: 'text' },
    sliderTitle: { control: 'text' },
    buttonLabel: { control: 'text' },
    description: { control: 'text' },
    disabled: { control: 'boolean' },
    isCropEnabled: { control: 'boolean' },
    onChange: { control: null },
    onUpload: { control: null },
    buttonProps: { control: 'object' },
  },
}

export const Default = args => {
  return <ImageCropper {...args} />
}

export const WithImage = args => {
  return (
    <ImageCropper
      {...args}
      imageSrc={`/kitten-${Math.floor(Math.random() * 10)}.jpg`}
      fileName="Steven Kitten"
    />
  )
}
