import React from 'react'
import renderer from 'react-test-renderer'
import { CommentForm } from './index'

describe('<CommentForm />', () => {
  it('should match its empty snapshot', () => {
    const tree = renderer
      .create(
        <CommentForm
          id="custom-textarea-id"
          aria-label="Leave a comment"
          avatarImgProps={{
            src: '#image',
            alt: 'Image alt',
          }}
          placeholder="Leave a comment on the project"
          buttonText="Comment"
        />,
        {
          createNodeMock: element => {
            if (element.type === 'textarea') {
              return document.createElement('textarea')
            }
          },
        },
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should match its error snapshot', () => {
    const tree = renderer
      .create(
        <CommentForm
          id="custom-textarea-id"
          aria-label="Leave a comment"
          avatarImgProps={{
            src: '#image',
            alt: 'Image alt',
          }}
          placeholder="Leave a comment on the project"
          buttonText="Comment"
          errorMessage="Cum sociis natoque penatibus et magnis"
          error
        />,
        {
          createNodeMock: element => {
            if (element.type === 'textarea') {
              return document.createElement('textarea')
            }
          },
        },
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
