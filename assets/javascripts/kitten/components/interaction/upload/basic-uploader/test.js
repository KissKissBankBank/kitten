import React from 'react'
import renderer from 'react-test-renderer'
import { BasicUploader } from './index'

describe('<BasicUploader />', () => {
  it('should match snapshot', () => {
    const component = renderer
      .create(<BasicUploader id="BasicUploader" />)
      .toJSON()
    expect(component).toMatchSnapshot()
  })
  it('should match snapshot with Error props', () => {
    const component = renderer
      .create(
        <BasicUploader
          id="BasicUploader"
          errorText="There has been an error"
        />,
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })
  it('should match snapshot with props', () => {
    const component = renderer
      .create(
        <BasicUploader
          id="BasicUploader"
          buttonProps={{ size: 'large' }}
          fileInputProps={{ multiple: true }}
          disabled={true}
          fileName="document.pdf"
          statusText="The document has been validated"
          buttonText="Document"
          status="valid"
          canCancel={true}
          cancelButtonText="Cancel and reupload"
        />,
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })
})
