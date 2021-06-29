import React from 'react'
import renderer from 'react-test-renderer'
import { DocumentsDropUploader } from './index'

describe('<DocumentsDropUploader />', () => {
  it('should match snapshot', () => {
    const component = renderer
      .create(<DocumentsDropUploader id="DocumentsDropUploader" />)
      .toJSON()
    expect(component).toMatchSnapshot()
  })
  it('should match snapshot without props', () => {
    const component = renderer
      .create(<DocumentsDropUploader id="DocumentsDropUploader" />)
      .toJSON()
    expect(component).toMatchSnapshot()
  })
  it('should match snapshot with error', () => {
    const component = renderer
      .create(
        <DocumentsDropUploader
          id="DocumentsDropUploader"
          status="error"
          errorMessages={['There is a problem']}
          labelText="Add a document"
          managerTitle="Upload your ID documents"
          managerText="Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."
          initialValue={[{ name: 'kitten.jpg' }]}
          typeErrorText={e => `File ${e} is not the right file type`}
          sizeErrorText={e => `File ${e} is too large`}
        />,
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })
  it('should match snapshot without props', () => {
    const component = renderer
      .create(
        <DocumentsDropUploader
          id="DocumentsDropUploader"
          labelText="Add a document"
          managerTitle="Upload your ID documents"
          managerText="Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."
          initialValue={[{ name: 'kitten.jpg' }]}
          typeErrorText={e => `File ${e} is not the right file type`}
          sizeErrorText={e => `File ${e} is too large`}
        />,
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })
})
