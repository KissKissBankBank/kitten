import React, { useState } from 'react'
import { boolean } from '@storybook/addon-knobs'
import { BasicUploader } from './index'
import { Loader } from '../../../components/loaders/loader'

export default {
  component: BasicUploader,
  title: 'Uploaders/BasicUploader',
}

export const StatusReady = args => (
  <BasicUploader
    {...args}
    id="BasicUploader__StatusReady"
    buttonText="Send document"
  />
)

export const SizeModifiersWithButtonProps = args => (
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
)

export const OnFormError = args => (
  <BasicUploader
    {...args}
    id="BasicUploader__OnFormError"
    buttonText="Send document"
    errorText="Veuillez sélectionner un fichier à envoyer"
  />
)

export const StatusValid = args => (
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
)

export const StatusError = args => (
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
)

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

export const CustomFileInputProps = args => (
  <BasicUploader
    {...args}
    id="BasicUploader__CustomFileInputProps"
    fileInputProps={{
      accept: 'image/png, image/jpeg',
      multiple: true,
    }}
  />
)

export const CustomFunctions = args => {
  const [isLoading, setLoadingState] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState(null)

  return (
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
  )
}
