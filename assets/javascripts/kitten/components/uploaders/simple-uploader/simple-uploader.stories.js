import React from 'react'
import { action } from '@storybook/addon-actions'
import { text, boolean, number } from '@storybook/addon-knobs'
import { SimpleUploader } from './index'

export default {
  title: 'Uploaders/SimpleUploader',
  component: SimpleUploader,
}

export const Default = () => (
  <SimpleUploader
    fileName={text('Filename', 'Filename')}
    disabled={boolean('Disabled', false)}
    deletable={boolean('Deletable', true)}
    buttonLabel={text('Button Label', 'Choose a file')}
    acceptedFiles={text('Accepted files', '.jpg,.jpeg,.gif,.png')}
    maxSize={number('Max size', 5 * 1024 * 1024)}
    base64={boolean('base64', false)}
    onSuccess={action('success')}
    onError={action('error')}
  />
)
