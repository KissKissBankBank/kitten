import React from 'react'
import renderer from 'react-test-renderer'
import { DocumentManager } from './index'

describe('<DocumentManager />', () => {
  it('should match snapshot', () => {
    const component = renderer
      .create(<DocumentManager id="DocumentManager" />)
      .toJSON()
    expect(component).toMatchSnapshot()
  })
  it('should match snapshot with props', () => {
    const component = renderer
      .create(
        <DocumentManager
          id="DocumentManager"
          buttonProps={{ big: true }}
          fileInputProps={{ multiple: true }}
          uploaderStatus="valid"
          displayTitle="document validate"
          displaySubtitle="document.jpg"
          canCancel={true}
          cancelButtonText="Cancel"
          canReplace={true}
          replaceButtonText="Replace document"
        />,
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })
})
