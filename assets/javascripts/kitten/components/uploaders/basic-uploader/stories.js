import React, { useState } from 'react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { Container } from '../../../components/grid/container'
import { BasicUploader } from './index'
import { Grid, GridCol } from '../../../components/grid/grid'
import { Loader } from '../../../components/loaders/loader'

export default {
  component: BasicUploader,
  title: 'Uploaders/BasicUploader',
  decorators: [withKnobs, withInfo],
  parameters: {
    component: BasicUploader,
    info: {
      text: `
        # BasicUploader
        &nbsp;

        ## Import
        ~~~js
        import { BasicUploader } from '@kisskissbankbank/kitten/src/components/uploaders/basic-uploader'
        ~~~
        &nbsp;

        ## Usage
        &nbsp;

        #### Default

        ~~~js
        <BasicUploader
          id="BasicUploader" // required
        />
        ~~~
        &nbsp;

        #### All props

        ~~~js
        <BasicUploader
          id="BasicUploader" // required
          buttonProps={{ big: true }}
          fileInputProps={{ multiple: true }}
          disabled={true}
          fileName="document.pdf"
          statusText="The document has been validated"
          buttonText="Document"
          uploaderStatus="valid"
          onUpload={(file) => { console.log(file) }}
          onCancel={() => {console.log("Cancel button pressed")}}
          canCancel={true}
          cancelButtonText="Cancel and reupload"
          loaderAnimation={<Loader />}
        />
        ~~~
        &nbsp;

        #### On error

        ~~~js
        <BasicUploader
          id="BasicUploader" // required
          errorText="There has been an error"
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
        <BasicUploader
          id="BasicUploader__StatusReady"
          buttonText="Send document"
        />
      </GridCol>
    </Grid>
  </Container>
)

export const OnFormError = () => (
  <Container>
    <Grid>
      <GridCol offset="1" col="10" className="k-u-margin-top-quadruple">
        <BasicUploader
          id="BasicUploader__OnFormError"
          buttonText="Send document"
          errorText="Veuillez sélectionner un fichier à envoyer"
        />
      </GridCol>
    </Grid>
  </Container>
)

export const StatusValid = () => (
  <Container>
    <Grid>
      <GridCol offset="1" col="10" className="k-u-margin-top-quadruple">
        <BasicUploader
          id="BasicUploader__StatusValid"
          buttonText="Send document"
          fileName="document.pdf"
          uploaderStatus="valid"
          canCancel={boolean('canCancel', false)}
          disabled={boolean('disabled', true)}
          statusText="The document is valid."
        />
      </GridCol>
    </Grid>
  </Container>
)

export const StatusError = () => (
  <Container>
    <Grid>
      <GridCol offset="1" col="10" className="k-u-margin-top-quadruple">
        <BasicUploader
          id="BasicUploader__StatusError"
          buttonText="Send document"
          fileName="document.pdf"
          uploaderStatus="error"
          canCancel={boolean('canCancel', true)}
          disabled={boolean('disabled', false)}
          statusText="The document has been rejected. Please upload another one."
        />
      </GridCol>
    </Grid>
  </Container>
)

export const StatusWaiting = () => (
  <Container>
    <Grid>
      <GridCol offset="1" col="10" className="k-u-margin-top-quadruple">
        <BasicUploader
          id="BasicUploader__StatusWaiting"
          buttonText="Send document"
          fileName="document.pdf"
          uploaderStatus="wait"
          canCancel={boolean('canCancel', false)}
          disabled={boolean('disabled', true)}
          statusText="The document is awaiting for validation."
        />
      </GridCol>
    </Grid>
  </Container>
)

export const StatusLoading = () => (
  <Container>
    <Grid>
      <GridCol offset="1" col="10" className="k-u-margin-top-quadruple">
        <BasicUploader
          id="BasicUploader__StatusLoading"
          buttonText="Send document"
          buttonProps={{
            big: true,
            modifier: 'helium',
          }}
          uploaderStatus="loading"
        />
      </GridCol>
    </Grid>
  </Container>
)

export const CustomFileInputProps = () => (
  <Container>
    <Grid>
      <GridCol offset="1" col="10" className="k-u-margin-top-quadruple">
        <BasicUploader
          id="BasicUploader__CustomFileInputProps"
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
  const [isLoading, setLoadingState] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState(null)

  return (
    <Container>
      <Grid>
        <GridCol offset="1" col="10" className="k-u-margin-top-quadruple">
          <BasicUploader
            id="BasicUploader__CustomFunctions"
            onUpload={files => {
              setLoadingState(true)
              setUploadedFiles(files)
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
            uploaderStatus={isLoading ? 'loading' : 'ready'}
            fileName={
              isLoading && `Currently uploading ${uploadedFiles.length} files`
            }
            loaderAnimation={isLoading && <Loader />}
          />
        </GridCol>
      </Grid>
    </Container>
  )
}
