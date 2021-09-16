import React from 'react'
import { DocumentsDropUploader } from './index'
import { action } from '@storybook/addon-actions'
import { DocsPage } from 'storybook/docs-page'

export default {
  component: DocumentsDropUploader,
  title: 'Molecules/Upload/DocumentsDropUploader',
  parameters: {
    docs: {
      page: () => (
        <DocsPage filepath={__filename} importString="DocumentsDropUploader" />
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
  argTypes: {
    id: {
      name: 'id',
      control: 'text',
    },
    labelText: {
      name: 'labelText',
      control: 'text',
    },
    managerTitle: {
      name: 'managerTitle',
      control: 'text',
    },
    managerText: {
      name: 'managerText',
      control: 'text',
    },
    managerInfo: {
      name: 'managerInfo',
      control: 'text',
    },
    onChange: {
      name: 'onChange',
      control: null,
    },
    onError: {
      name: 'onError',
      control: null,
    },
    disabled: {
      name: 'disabled',
      control: 'boolean',
    },
    status: {
      name: 'status',
      options: ['ready', 'error'],
      control: 'radio',
    },
    errorMessage: {
      name: 'errorMessage',
      control: 'text',
    },
    typeErrorText: {
      name: 'typeErrorText',
      control: null,
    },
    sizeErrorText: {
      name: 'sizeErrorText',
      control: null,
    },
    removeActionMessage: {
      name: 'removeActionMessage',
      control: null,
    },
    acceptedFileSize: {
      name: 'acceptedFileSize',
      control: 'number',
    },
    acceptedMimeTypes: {
      name: 'acceptedMimeTypes',
      control: 'object',
    },
  },
}

const args = {
  id: 'DocumentsDropUploader',
  labelText: 'Add a document',
  managerTitle: 'Upload your ID documents',
  managerText:
    'Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
  managerInfo: '(Max: 1MB, Formats: JPG, PNG, SVG)',
  onChange: action('onChange'),
  onError: action('onError'),
  disabled: false,
  status: 'ready',
  errorMessage: null,
  typeErrorText: e => `File ${e} is not the right file type`,
  sizeErrorText: e => `File ${e} is too large`,
  removeActionMessage: e => `Click to remove ${e}`,
  acceptedFileSize: 1 * 1024 * 1024,
  acceptedMimeTypes: ['image/jpeg', 'image/png', 'image/svg+xml'],
}

export const Default = args => <DocumentsDropUploader {...args} />
Default.args = args

export const Manage = args => <DocumentsDropUploader {...args} />
Manage.args = {
  ...args,
  initialValue: [{ name: 'kitten.jpg' }],
}
