import React, { Fragment, useState, useEffect } from 'react'
import { boolean } from '@storybook/addon-knobs'
import { DocumentManager } from './index'
import { Loader } from '../../../components/loaders/loader'
import { DocumentIconEmpty } from '../../../components/icons/document-icon-empty'
import { DocumentIconHouse } from '../../../components/icons/document-icon-house'
import { DocumentIconPerson } from '../../../components/icons/document-icon-person'
import { usePrevious } from '../../../helpers/utils/use-previous-hook'

export const StatusReady = () => (
  <div className="story-Container story-Grid story-Grid--large">
    <DocumentManager
      id="DocumentManager__StatusReady"
      buttonTitle="Upload a document"
      buttonSubtitle="Document size must be 2Mb or less."
      documentIcon={<DocumentIconHouse />}
    />
  </div>
)

export const StatusValid = () => (
  <div className="story-Container story-Grid story-Grid--large">
    <DocumentManager
      id="DocumentManager__StatusValid"
      displayTitle="Recto/Verso de ma pièce d’identité validé le 6 janvier 2020"
      displaySubtitle="document.pdf"
      status="valid"
      canCancel={boolean('canCancel', false)}
      statusText="The document is valid."
      documentIcon={<DocumentIconPerson />}
    />
  </div>
)

export const StatusError = () => (
  <div className="story-Container story-Grid story-Grid--large">
    <DocumentManager
      id="DocumentManager__StatusError"
      buttonTitle="Upload a document"
      buttonSubtitle="Document size must be 2Mb or less."
      displayTitle={
        <>
          Extrat KBIS refusé le 8 février 2020 pour la raison suivante :
          <br />
          mauvaise adresse
        </>
      }
      displaySubtitle="document.pdf"
      status="error"
      canReplace={boolean('canReplace', true)}
      statusText="The document has been rejected. Please upload another one."
      documentIcon={<DocumentIconHouse />}
    />
  </div>
)

export const StatusWaiting = () => (
  <div className="story-Container story-Grid story-Grid--large">
    <DocumentManager
      id="DocumentManager__StatusWaiting"
      displayTitle="Votre RIB est en cours de validation"
      displaySubtitle="document.pdf"
      status="wait"
      canCancel={boolean('canCancel', false)}
      statusText="The document is awaiting for validation."
      documentIcon={<DocumentIconEmpty />}
    />
  </div>
)

export const StatusLoading = () => (
  <div className="story-Container story-Grid story-Grid--large">
    <DocumentManager
      id="DocumentManager__StatusLoading"
      buttonProps={{
        modifier: 'helium',
      }}
      status="loading"
      loaderText="The document is currently loading"
    />
  </div>
)

export const CustomFileInputProps = () => (
  <div className="story-Container story-Grid story-Grid--large">
    <DocumentManager
      id="DocumentManager__CustomFileInputProps"
      buttonTitle="Send document"
      buttonSubtitle="Document size must be 2Mb or less."
      fileInputProps={{
        accept: 'image/png, image/jpeg',
        multiple: true,
      }}
    />
  </div>
)

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
