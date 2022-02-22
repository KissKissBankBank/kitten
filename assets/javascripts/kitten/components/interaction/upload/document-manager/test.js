import React from 'react'
import renderer from 'react-test-renderer'
import { DocumentManager } from './index'

describe('<DocumentManager />', () => {
  it('should match snapshot with ready state props', () => {
    const component = renderer
      .create(
        <DocumentManager
          id="DocumentManager"
          buttonProps={{ size: 'big' }}
          fileInputProps={{ multiple: true }}
          canCancel={true}
        />,
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })
  it('should match snapshot with active state props', () => {
    const component = renderer
      .create(
        <DocumentManager
          id="DocumentManager"
          status="valid"
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
  it('should match snapshot with error state props and content', () => {
    const component = renderer
      .create(
        <DocumentManager
          id="DocumentManager"
          status="error"
          displayTitle="document validate"
          displayContent={
            <>
              <p>Mauvaise adresse :</p>
              <ul>
                <li>Etiam porta sem malesuada magna mollis euismod.</li>
                <li>
                  Integer posuere erat a ante venenatis dapibus posuere velit
                  aliquet.
                </li>
                <li>
                  Fusce dapibus, tellus ac cursus commodo, tortor mauris
                  condimentum nibh, ut fermentum massa justo sit amet risus.
                </li>
              </ul>
            </>
          }
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
