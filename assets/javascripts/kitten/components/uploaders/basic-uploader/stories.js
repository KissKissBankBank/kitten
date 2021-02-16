import React, { useState } from 'react'
import { boolean } from '@storybook/addon-knobs'
import { BasicUploader } from './index'
import { Loader } from '../../../components/loaders/loader'

export default {
  component: BasicUploader,
  title: 'Uploaders/BasicUploader',
}

export const StatusReady = args => (
  <div className="story-Container story-Grid story-Grid--large">
    <BasicUploader
      {...args}
      id="BasicUploader__StatusReady"
      buttonText="Send document"
    />
  </div>
)

export const SizeModifiersWithButtonProps = args => (
  <div className="story-Container story-Grid story-Grid--large">
    <BasicUploader
      {...args}
      id="BasicUploader__StatusReady"
      buttonProps={{
        tiny: boolean('Tiny', false),
        big: boolean('Big', false),
        huge: boolean('Huge', false),
        giant: boolean('Giant', false),
      }}
      buttonText="Send document"
    />
  </div>
)

export const OnFormError = args => (
  <div className="story-Container story-Grid story-Grid--large">
    <BasicUploader
      {...args}
      id="BasicUploader__OnFormError"
      buttonText="Send document"
      errorText="Veuillez sélectionner un fichier à envoyer"
    />
  </div>
)

export const StatusValid = args => (
  <div className="story-Container story-Grid story-Grid--large">
    <BasicUploader
      {...args}
      id="BasicUploader__StatusValid"
      buttonText="Send document"
      fileName="document.pdf"
      status="valid"
      canCancel={boolean('canCancel', false)}
      disabled={boolean('disabled', false)}
      statusText="The document is valid."
    />
  </div>
)

export const StatusError = args => (
  <div className="story-Container story-Grid story-Grid--large">
    <BasicUploader
      {...args}
      id="BasicUploader__StatusError"
      buttonText="Send document"
      fileName="document.pdf"
      status="error"
      canCancel={boolean('canCancel', true)}
      disabled={boolean('disabled', false)}
      statusText="The document has been rejected. Please upload another one."
    />
  </div>
)

export const StatusWaiting = args => (
  <div className="story-Container story-Grid story-Grid--large">
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
  </div>
)

export const StatusLoading = args => (
  <div className="story-Container story-Grid story-Grid--large">
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
  </div>
)

export const CustomFileInputProps = args => (
  <div className="story-Container story-Grid story-Grid--large">
    <BasicUploader
      {...args}
      id="BasicUploader__CustomFileInputProps"
      fileInputProps={{
        accept: 'image/png, image/jpeg',
        multiple: true,
      }}
    />
  </div>
)

export const CustomFunctions = args => {
  const [isLoading, setLoadingState] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState(null)

  return (
    <div className="story-Container story-Grid story-Grid--large">
      <BasicUploader
        {...args}
        id="BasicUploader__CustomFunctions"
        onUpload={event => {
          setLoadingState(true)
          setUploadedFiles(event.currentTarget.files)
        }}
        onCancel={() => {
          setLoadingState(false)
          setUploadedFiles(null)
        }}
        buttonText="Send document"
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
        loaderAnimation={isLoading && <Loader />}
      />
    </div>
  )
}
