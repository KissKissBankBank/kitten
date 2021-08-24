import React from 'react'
import { DocumentsDropUploader } from './index'
import { boolean, text, select } from '@storybook/addon-knobs'
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
}

export const Default = () => (
  <DocumentsDropUploader
    id="DocumentsDropUploader"
    labelText="Add a document"
    managerTitle="Upload your ID documents"
    managerText="Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."
    managerInfo="(Max: 1MB, Formats: JPG, PNG, SVG)"
    onChange={action('onChange')}
    onError={action('onError')}
    disabled={boolean('Disabled?', false)}
    status={select('Status', ['ready', 'manage', 'error'], 'ready')}
    errorMessage={text('ErrorMessage', null)}
    typeErrorText={e => `File ${e} is not the right file type`}
    sizeErrorText={e => `File ${e} is too large`}
    removeActionMessage={e => `Click to remove ${e}`}
    acceptedFileSize={1 * 1024 * 1024}
    acceptedMimeTypes={['image/jpeg', 'image/png', 'image/svg+xml']}
  />
)

export const Manage = () => (
  <DocumentsDropUploader
    id="DocumentsDropUploader"
    labelText="Add a document"
    managerTitle="Upload your ID documents"
    managerText="Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."
    managerInfo="(Max: 1MB, Formats: JPG, PNG, SVG)"
    initialValue={[{ name: 'kitten.jpg' }]}
    onChange={action('onChange')}
    onError={action('onError')}
    disabled={boolean('Disabled?', false)}
    status={
      boolean('Error?', false) ? 'error' : select('Status', ['ready', 'error'])
    }
    errorMessageMessage={text('ErrorMessage', null)}
    typeErrorText={e => `File ${e} is not the right file type`}
    sizeErrorText={e => `File ${e} is too large`}
    removeActionMessage={e => `Click to remove ${e}`}
  />
)
