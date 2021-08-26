import React, { useState } from 'react'
import { boolean } from '@storybook/addon-knobs'
import { BasicUploader } from './index'
import { Loader } from '../../../..'
import { DocsPage } from 'storybook/docs-page'
import { action } from '@storybook/addon-actions'

export default {
  component: BasicUploader,
  title: 'Molecules/Upload/BasicUploader',
  parameters: {
    docs: {
      page: () => (
        <DocsPage filepath={__filename} importString="BasicUploader" />
      ),
    },
  },
  decorators: [story => (
    <div className="story-Container story-Grid story-Grid--large">
      {story()}
    </div>
  )],
}

const args = {
  id: 'BasicUploader',
  buttonProps: {},
  buttonText: 'Send document',
  canCancel: true,
  cancelButtonText: 'Cancel',
  disabled: false,
  errorText: undefined,
  fileInputProps: {},
  fileName: undefined,
  onCancel: action('onCancel'),
  onUpload: action('onUpload'),
  status: 'ready',
  statusText: undefined,
}

const argTypes = {
  id: {
    name: 'id',
    control: { type: 'text' },
  },
  buttonProps: {
    name: 'buttonProps',
    control: { type: 'object' },
  },
  buttonText: {
    name: 'buttonText',
    control: { type: 'text' },
  },
  canCancel: {
    name: 'canCancel',
    control: { type: 'boolean' },
  },
  cancelButtonText: {
    name: 'cancelButtonText',
    control: { type: 'text' },
  },
  disabled: {
    name: 'disabled',
    control: { type: 'boolean' },
  },
  errorText: {
    name: 'errorText',
    control: { type: 'text' },
  },
  fileInputProps: {
    name: 'fileInputProps',
    control: { type: 'object' },
  },
  fileName: {
    name: 'fileName',
    control: { type: 'text' },
  },
  onCancel: {
    name: 'onCancel',
    control: null,
  },
  onUpload: {
    name: 'onUpload',
    control: null,
  },
  status: {
    name: 'status',
    options: ['ready', 'error', 'valid', 'wait', 'loading'],
    control: { type: 'select' },
  },
  statusText: {
    name: 'statusText',
    control: { type: 'text' },
  },
}

export const Default = args => (
  <BasicUploader {...args} />
)
Default.args = args
Default.argTypes = argTypes

export const StatusValid = args => (
  <BasicUploader
    {...args}
  />
)
StatusValid.args = {
  ...args,
    fileName: 'document.pdf',
    status: 'valid',
    statusText: 'The document is valid.'
}
StatusValid.argTypes = argTypes

export const StatusError = args => (
  <BasicUploader
    {...args}
  />
)
StatusError.args = {
  ...args,
  fileName: 'document.pdf',
  status: 'error',
  statusText: 'The document has been rejected. Please upload another one.',
}
StatusError.argTypes = argTypes

export const StatusWaiting = args => (
  <BasicUploader
    {...args}
    id="BasicUploader__StatusWaiting"
    buttonText="Send document"
    fileName="document.pdf"
    status="wait"
    canCancel={boolean('canCancel', false)}
    disabled={boolean('disabled', false)}
    statusText="The document is awaiting for validation."
  />
)
StatusWaiting.args = {
  ...args,
  fileName: 'document.pdf',
  status: 'wait',
  statusText: 'The document is awaiting for validation.',
}
StatusWaiting.argTypes = argTypes


export const StatusLoading = args => (
  <BasicUploader
    {...args}
    id="BasicUploader__StatusLoading"
    buttonText="Send document"
    buttonProps={{
      big: true,
      modifier: 'helium',
    }}
    status="loading"
  />
)
StatusLoading.args = {
  ...args,
  status: 'loading',
  buttonProps: {
    size: 'big',
    modifier: 'helium',
  }
}
StatusLoading.argTypes = argTypes


export const CustomFileInputProps = args => (
  <BasicUploader
    {...args}
  />
)
CustomFileInputProps.args = {
  ...args,
  fileInputProps: {
    accept: 'image/png, image/jpeg',
    multiple: true,
  }
}
CustomFileInputProps.argTypes = argTypes


export const CustomFunctions = args => {
  const [isLoading, setLoadingState] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState(null)

  return (
    <BasicUploader
      {...args}
      onUpload={event => {
        setLoadingState(true)
        setUploadedFiles(event.currentTarget.files)
      }}
      onCancel={() => {
        setLoadingState(false)
        setUploadedFiles(null)
      }}
      buttonProps={
        isLoading && {
          modifier: 'helium',
        }
      }
      fileInputProps={{
        multiple: true,
      }}
      status={isLoading ? 'loading' : 'ready'}
      fileName={
        isLoading && `Currently uploading ${uploadedFiles.length} files`
      }
    />
  )
}
CustomFunctions.args = args
CustomFunctions.argTypes = argTypes

