import React, { useState } from 'react'
import { ImageDropUploader } from './index'
import { BackingCard, Grid, GridCol, Tag } from '../../../..'
import { DocsPage } from 'storybook/docs-page'
import { action } from '@storybook/addon-actions'

export default {
  component: ImageDropUploader,
  title: 'Molecules/Upload/ImageDropUploader',
  parameters: {
    docs: {
      page: () => (
        <DocsPage
          filepath={__filename}
          filenames={[
            'index.js',
            'components/image-cropper.js',
            'components/use-drag.js',
            'components/pause-event.js',
          ]}
          importString="ImageDropUploader"
        />
      ),
    },
  },
  decorators: [story => <div className="story-Container">{story()}</div>],
  argTypes: {
    id: {
      name: 'id',
      control: 'text',
    },
    acceptedFileSize: {
      name: 'acceptedFileSize',
      control: 'number',
    },
    acceptedMimeTypes: {
      name: 'acceptedMimeTypes',
      control: 'object',
    },
    buttonProps: {
      name: 'buttonProps',
      control: 'object',
    },
    buttonText: {
      name: 'buttonText',
      control: 'text',
    },
    buttonTitle: {
      name: 'buttonTitle',
      control: 'text',
    },
    canCancel: {
      name: 'canCancel',
      control: 'boolean',
    },
    canCrop: {
      name: 'canCrop',
      control: 'boolean',
    },
    cancelButtonText: {
      name: 'cancelButtonText',
      control: 'text',
    },
    cropRatio: {
      name: 'cropRatio',
      control: 'number',
    },
    disabled: {
      name: 'disabled',
      control: 'boolean',
    },
    error: {
      name: 'error',
      control: 'boolean',
    },
    errorMessage: {
      name: 'errorMessage',
      control: 'text',
    },
    fileInputProps: {
      name: 'fileInputProps',
      control: 'object',
    },
    initialCrop: {
      name: 'initialCrop',
      control: 'object',
    },
    initialValue: {
      name: 'initialValue',
      control: 'text',
    },
    managerText: {
      name: 'managerText',
      control: 'text',
    },
    managerTitle: {
      name: 'managerTitle',
      control: 'text',
    },
    onCancel: {
      name: 'onCancel',
      control: null,
    },
    onChange: {
      name: 'onChange',
      control: null,
    },
    onUpload: {
      name: 'onUpload',
      control: null,
    },
    quantityErrorText: {
      name: 'quantityErrorText',
      control: 'text',
    },
    sizeErrorText: {
      name: 'sizeErrorText',
      control: 'text',
    },
    status: {
      name: 'status',
      options: ['ready', 'error', 'manage'],
      control: 'select',
    },
    typeErrorText: {
      name: 'typeErrorText',
      control: 'text',
    },
    dimensionErrorText: {
      name: 'dimensionErrorText',
      control: 'text',
    },
    acceptedImageDimensions: {
      name: 'acceptedImageDimensions',
      control: 'object',
    },
  },
}

const args = {
  id: 'ImageDropUploader',
  acceptedFileSize: 5 * 1024 * 1024,
  acceptedMimeTypes: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
  buttonProps: {},
  buttonTitle: 'Upload an image',
  buttonText: (
    <div class=" k-u-flex k-u-flex-direction-column k-u-flex-gap-noneHalf">
      <span>
        Recadrage&nbsp;: Carré (500x500px)
      </span>
      <span>
        Taille max&nbsp;: 5&nbsp;Mo
      </span>
      <span>
        Format&nbsp;: JPEG, PNG ou GIF.
      </span>
    </div>
  ),
  managerTitle: 'Frame your image',
  managerText: 'You can move your image around the frame',
  onChange: action('onChange'),
  onCancel: action('onCancel'),
  onUpload: action('onUpload'),
  disabled: false,
  error: false,
  errorMessage: null,
  typeErrorText: 'Wrong file type',
  sizeErrorText: 'File too large',
  quantityErrorText: 'Too many files',
  dimensionErrorText: 'Image dimensions too big (4096x4096px max)',
  acceptedImageDimensions: { width: 4096, height: 4096 },
  cancelButtonText: 'Cancel',
  cropRatio: 10 / 10,
  canCrop: true,
  canCancel: true,
  fileInputProps: {},
  initialCrop: undefined,
  initialValue: undefined,
}

export const Default = args => <ImageDropUploader {...args} />
Default.args = args

export const StatusManage = args => <ImageDropUploader {...args} />
StatusManage.args = {
  ...args,
  initialValue: `/kitten-${Math.floor(Math.random() * 10)}.jpg`,
  initialCrop: { height: 592, width: 948, x: 0, y: 265 },
}

export const WithDistantImage = args => {
  const [imageUrl, setImageUrl] = useState(null)
  const [imagePosition, setImagePosition] = useState(null)

  const handleChange = data => {
    setImageUrl(data.value)
    setImagePosition(
      `${data?.cropperData?.cropPercent?.x}% ${data?.cropperData?.cropPercent?.y}%`,
    )
  }

  return (
    <Grid>
      <GridCol col-l="6">
        <ImageDropUploader {...args} onChange={handleChange} />
      </GridCol>
      <GridCol col-l="3" offset-l="2">
        <BackingCard>
          {imageUrl && (
            <BackingCard.Image>
              <img
                src={imageUrl}
                alt=""
                style={{ objectPosition: imagePosition }}
              />
            </BackingCard.Image>
          )}
          <BackingCard.HeadingTag icon="star" text="Star reward" />
          <BackingCard.Title>
            Lorem ipsum dolor sit amet, consectetuer adipiscing eget dolor.
          </BackingCard.Title>
          <BackingCard.Amount>65&nbsp;€</BackingCard.Amount>
          <BackingCard.Info
            legend="Prix de livraison&nbsp;:"
            value="5&nbsp;€ (en France)"
          />
          <BackingCard.Info
            legend="Livraison estimée&nbsp;:"
            value="Janvier 2022"
          />
          <BackingCard.Description moreButtonText="See more…" truncateText>
            <p className="k-u-margin-none">
              <strong className="k-u-weight-regular">Maecenas tempus</strong>,
              tellus eget condimentum rhoncus, sem quam semper libero,{' '}
              <em className="k-u-style-italic">sit amet adipiscing</em> sem
              neque sed ipsum.
            </p>
            <p className="k-u-margin-none">
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
            <p className="k-u-margin-none">
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
            <p className="k-u-margin-none">
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
          </BackingCard.Description>
          <BackingCard.TagList>
            <Tag as="li">
              <strong className="k-u-weight-regular">5</strong> contributeurs
            </Tag>
            <Tag as="li">
              <strong className="k-u-weight-regular">2/6</strong> disponibles
            </Tag>
          </BackingCard.TagList>
        </BackingCard>
      </GridCol>
    </Grid>
  )
}
WithDistantImage.args = {
  ...args,
  initialValue: `/kitten-${Math.floor(Math.random() * 10)}.jpg`,
  initialCrop: { height: 592, width: 948, x: 0, y: 265 },
}
