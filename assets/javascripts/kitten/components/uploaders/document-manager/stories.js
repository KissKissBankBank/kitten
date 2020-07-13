import React, { Fragment, useState, useEffect } from 'react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { Container } from '../../../components/grid/container'
import { DocumentManager } from './index'
import { Grid, GridCol } from '../../../components/grid/grid'
import { Loader } from '../../../components/loaders/loader'
import { DocumentIconEmpty } from '../../../components/icons/document-icon-empty'
import { DocumentIconHouse } from '../../../components/icons/document-icon-house'
import { DocumentIconPerson } from '../../../components/icons/document-icon-person'

export default {
  component: DocumentManager,
  title: 'Uploaders/DocumentManager',
  decorators: [withKnobs, withInfo],
  parameters: {
    component: DocumentManager,
    info: {
      text: `
        # DocumentManager
        &nbsp;

        ## Import
        ~~~js
        import { DocumentManager } from '@kisskissbankbank/kitten/src/components/uploaders/document-manager'
        ~~~
        &nbsp;

        ## Usage
        &nbsp;

        #### Default

        ~~~js
        <DocumentManager
          id="DocumentManager" // required
        />
        ~~~
        &nbsp;

        #### All props

        ~~~js
        <DocumentManager
          id="DocumentManager" // required
          buttonProps={{ big: true }}
          fileInputProps={{ multiple: true }}
          buttonTitle="Upload files"
          buttonSubtitle="You can JPG or PNG files up to 2MB"
          displayTitle=""
          displaySubtitle=""
          status={'ready'}
          onUpload={() => { (event) => console.log(event)} }
          onCancel={() => { () => console.log('cancel clicked') } }
          canCancel={false}
          cancelButtonText="Upload another document"
          canReplace={false}
          replaceButtonText="Replace current"
          loaderAnimation={<Loader />}
          documentIcon={<DocumentIconEmpty />}
        />
        ~~~
        &nbsp;

        ---
      `,
      header: false,
      propTables: false,
    },
  },
}

export const StatusReady = () => (
  <Container>
    <Grid>
      <GridCol offset="1" col="10" className="k-u-margin-top-quadruple">
        <DocumentManager
          id="DocumentManager__StatusReady"
          buttonTitle="Upload a document"
          buttonSubtitle="Document size must be 2Mb or less."
          documentIcon={<DocumentIconHouse />}
        />
      </GridCol>
    </Grid>
  </Container>
)

export const StatusValid = () => (
  <Container>
    <Grid>
      <GridCol offset="1" col="10" className="k-u-margin-top-quadruple">
        <DocumentManager
          id="DocumentManager__StatusValid"
          displayTitle="Recto/Verso de ma pièce d’identité validé le 6 janvier 2020"
          displaySubtitle="document.pdf"
          status="valid"
          canCancel={boolean('canCancel', false)}
          statusText="The document is valid."
          documentIcon={<DocumentIconPerson />}
        />
      </GridCol>
    </Grid>
  </Container>
)

export const StatusError = () => (
  <Container>
    <Grid>
      <GridCol offset="1" col="10" className="k-u-margin-top-quadruple">
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
      </GridCol>
    </Grid>
  </Container>
)

export const StatusWaiting = () => (
  <Container>
    <Grid>
      <GridCol offset="1" col="10" className="k-u-margin-top-quadruple">
        <DocumentManager
          id="DocumentManager__StatusWaiting"
          displayTitle="Votre RIB est en cours de validation"
          displaySubtitle="document.pdf"
          status="wait"
          canCancel={boolean('canCancel', false)}
          statusText="The document is awaiting for validation."
          documentIcon={<DocumentIconEmpty />}
        />
      </GridCol>
    </Grid>
  </Container>
)

export const StatusLoading = () => (
  <Container>
    <Grid>
      <GridCol offset="1" col="10" className="k-u-margin-top-quadruple">
        <DocumentManager
          id="DocumentManager__StatusLoading"
          buttonProps={{
            modifier: 'helium',
          }}
          status="loading"
        />
      </GridCol>
    </Grid>
  </Container>
)

export const CustomFileInputProps = () => (
  <Container>
    <Grid>
      <GridCol offset="1" col="10" className="k-u-margin-top-quadruple">
        <DocumentManager
          id="DocumentManager__CustomFileInputProps"
          buttonTitle="Send document"
          buttonSubtitle="Document size must be 2Mb or less."
          fileInputProps={{
            accept: 'image/png, image/jpeg',
            multiple: true,
          }}
        />
      </GridCol>
    </Grid>
  </Container>
)

export const CustomFunctions = () => {
  const [status, setStatus] = useState('ready')
  const [uploadedFiles, setUploadedFiles] = useState(null)

  useEffect(() => {
    let loadingDelay

    if (status === 'loading') {
      loadingDelay = window.setTimeout(() => setStatus('wait'), 2000)
    }

    return () => window.clearTimeout(loadingDelay)
  }, [status])

  return (
    <Container>
      <Grid>
        <GridCol offset="1" col="10" className="k-u-margin-top-quadruple">
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
          />
        </GridCol>
      </Grid>
    </Container>
  )
}
