import React from 'react'
import renderer from 'react-test-renderer'
import { Comment } from './index'

describe('<Comment />', () => {
  it('should match its empty snapshot', () => {

    const tree = renderer
      .create(
        <Comment
          avatarImgProps={{
            src: '#image',
            alt: 'Image alt',
          }}
          commentDate="Custom date"
          ownerName="Custom name"
          headerActions={(
            <Comment.LikeButton hasLiked accessibilityLabel="Retirer des favoris">
              4
            </Comment.LikeButton>
          )}
        >
          Custom text
        </Comment>,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should match a snapshot with a complex bottom notes', () => {
    const BottomNotes = () => (
      <div>
        <a href="#" style={{ color: '#000' }}>
          Delete this comment
        </a>
        <a href="#" style={{ color: '#000' }}>
          Notify abuse
        </a>
      </div>
    )

    const tree = renderer
      .create(
        <Comment
          avatarImgProps={{
            src: '#image',
            alt: 'Image alt',
          }}
          commentDate="Custom date"
          ownerName="Custom name"
          footer={<BottomNotes />}
        >
          Custom text
        </Comment>,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should match a snapshot with a complex avatar badge', () => {
    const tree = renderer
      .create(
        <Comment
          avatarImgProps={{
            src: '#image',
            alt: 'Image alt',
          }}
          commentDate="Custom date"
          ownerName="Custom name"
        >
          Custom text
        </Comment>,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
