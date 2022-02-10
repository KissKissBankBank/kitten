import React, { Fragment, useState, useEffect } from 'react'
import { DocumentManager } from './index'
import {
  Loader,
  DocumentIconEmpty,
  DocumentIconHouse,
  DocumentIconPerson,
  usePrevious,
} from 'kitten'
import { action } from '@storybook/addon-actions'
import { DocsPage } from 'storybook/docs-page'

const args = {
  id: 'DocumentManager',
  buttonProps: {},
  canCancel: true,
  cancelButtonText: '',
  disabled: false,
  documentIcon: <DocumentIconEmpty />,
  errorText: null,
  fileInputProps: {},
  fileName: null,
  loaderAnimation: <Loader />,
  loaderText: '',
  onCancel: action('onCancel'),
  onUpload: action('onUpload'),
  status: 'ready',
  displaySubtitle: 'Document size must be 2Mb or less.',
  displayTitle: 'Upload a document',
  buttonSubtitle: 'Document size must be 2Mb or less.',
  buttonTitle: 'Upload a document',
}

const argTypes = {
  id: {
    name: 'id',
    control: 'text',
  },
  buttonProps: {
    name: 'buttonProps',
    control: 'object',
  },
  canCancel: {
    name: 'canCancel',
    control: 'boolean',
  },
  cancelButtonText: {
    name: 'cancelButtonText',
    control: 'text',
  },
  disabled: {
    name: 'disabled',
    control: 'boolean',
  },
  documentIcon: {
    name: 'documentIcon',
    control: null,
  },
  errorText: {
    name: 'errorText',
    control: 'text',
  },
  fileInputProps: {
    name: 'fileInputProps',
    control: 'object',
  },
  fileName: {
    name: 'fileName',
    control: 'text',
  },
  loaderAnimation: {
    name: 'loaderAnimation',
    control: null,
  },
  loaderText: {
    name: 'loaderText',
    control: 'text',
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
    control: 'radio',
  },
  displaySubtitle: {
    name: 'display subtitle',
    control: 'text',
  },
  displayTitle: {
    name: 'display title',
    control: 'text',
  },
  buttonSubtitle: {
    name: 'button subtitle',
    control: 'text',
  },
  buttonTitle: {
    name: 'button title',
    control: 'text',
  },
}

export default {
  component: DocumentManager,
  title: 'Interaction/Upload/DocumentManager',
  parameters: {
    docs: {
      page: () => (
        <DocsPage filepath={__filename} importString="DocumentManager" />
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
  argTypes,
}

export const Default = args => <DocumentManager {...args} />
Default.args = args

export const StatusValid = args => <DocumentManager {...args} />
StatusValid.args = {
  ...args,
  displayTitle: 'Recto/Verso de ma pièce d’identité validé le 6 janvier 2020',
  displaySubtitle: 'document.pdf',
  status: 'valid',
  documentIcon: <DocumentIconPerson />,
}

export const StatusError = args => <DocumentManager {...args} />
StatusError.args = {
  ...args,
  buttonTitle: 'Upload a document',
  buttonSubtitle: 'Document size must be 2Mb or less.',
  displayTitle: (
    <>
      Extrait KBIS refusé :<br />
      mauvaise adresse
    </>
  ),
  displaySubtitle: 'document.pdf',
  status: 'error',
  documentIcon: <DocumentIconHouse />,
}

export const StatusWaiting = args => (
  <DocumentManager
    {...args}
    id="DocumentManager__StatusWaiting"
    displayTitle="Votre RIB est en cours de validation"
    displaySubtitle="document.pdf"
    status="wait"
    documentIcon={<DocumentIconEmpty />}
  />
)
StatusWaiting.args = {
  ...args,
  displayTitle: 'Votre RIB est en cours de validation',
  displaySubtitle: 'document.pdf',
  status: 'wait',
}

export const StatusLoading = args => <DocumentManager {...args} />
StatusLoading.args = {
  ...args,
  buttonProps: {
    modifier: 'helium',
  },
  status: 'loading',
  loaderText: 'The document is currently loading',
}

export const CustomFileInputProps = args => <DocumentManager {...args} />
CustomFileInputProps.args = {
  ...args,
  buttonTitle: 'Send document',
  buttonSubtitle: 'Document size must be 2Mb or less.',
  fileInputProps: {
    accept: 'image/png, image/jpeg',
    multiple: true,
  },
}

export const CustomFunctions = () => {
  const [status, setStatus] = useState('ready')
  const [uploadedFiles, setUploadedFiles] = useState(null)

  const previousStatus = usePrevious(status)

  useEffect(() => {
    let loadingDelay
    let focusDelay

    if (status === 'loading') {
      loadingDelay = window.setTimeout(() => setStatus('wait'), 2000)
    }

    if (['ready', 'loading', 'wait'].includes(previousStatus)) {
      focusDelay = window.setTimeout(() => {
        document.getElementById('DocumentManager__CustomFunctions').focus()
      }, 100)
    }

    return () => {
      window.clearTimeout(loadingDelay)
      window.clearTimeout(focusDelay)
    }
  }, [status])

  return (
    <DocumentManager
      id="DocumentManager__CustomFunctions"
      onUpload={event => {
        setStatus('loading')
        setUploadedFiles(Array.from(event.currentTarget.files))
      }}
      onCancel={() => {
        setStatus('ready')
        setUploadedFiles(null)
      }}
      buttonTitle="Send document"
      buttonSubtitle="Document size must be 2Mb or less."
      buttonProps={
        status === 'loading'
          ? {
              modifier: 'helium',
            }
          : {}
      }
      fileInputProps={{
        multiple: true,
      }}
      status={status}
      displayTitle="Votre RIB est en cours de validation"
      displaySubtitle={
        uploadedFiles && (
          <>
            {uploadedFiles.map(file => (
              <Fragment key={file.name}>
                {file.name}
                <br />
              </Fragment>
            ))}
          </>
        )
      }
      loaderAnimation={status === 'loading' && <Loader />}
      canCancel
      cancelButtonText="Annuler"
      tabIndex="-1"
    />
  )
}
