import React from 'react'
import renderer from 'react-test-renderer'
import { DocumentsStatusBox } from './index'

describe('<DocumentsStatusBox />', () => {
  it('should match empty snapshot', () => {
    const component = renderer
      .create(<DocumentsStatusBox />)
      .toJSON()
    expect(component).toMatchSnapshot()
  })
  it('should match wait snapshot', () => {
    const component = renderer
      .create(
        <DocumentsStatusBox
          fileList={['kitten_document_1.jpg', 'kitten_document_2.jpg']}
          title="Documents status: awaiting confirmation"
          message="This process can take up to two days"
        />)
      .toJSON()
    expect(component).toMatchSnapshot()
  })
  it('should match accepted snapshot', () => {
    const component = renderer
      .create(
        <DocumentsStatusBox
          fileList={['kitten_document_1.jpg', 'kitten_document_2.jpg']}
          title="Document status: accepted"
        />)
      .toJSON()
    expect(component).toMatchSnapshot()
  })
  it('should match denied snapshot', () => {
    const component = renderer
      .create(
        <DocumentsStatusBox
          fileList={['kitten_document_1.jpg', 'kitten_document_2.jpg']}
          title="Document status: denied"
          message="The document was incorrect"
          retryAction={() => {}}
          retryActionMessage="Click to retry uploading a document"
        />)
      .toJSON()
    expect(component).toMatchSnapshot()
  })
})
