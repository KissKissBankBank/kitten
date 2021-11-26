import React from 'react'
import renderer from 'react-test-renderer'
import { Comment } from './index'
import { CheckedCircleIcon } from '../../../..'

const createMockMediaMatcher = matches => () => ({
  matches,
  addListener: () => {},
  removeListener: () => {},
})

describe('<Comment />', () => {
  let originalMatchMedia

  beforeEach(() => {
    originalMatchMedia = window.matchMedia
  })

  afterEach(() => {
    window.matchMedia = originalMatchMedia
  })

  it('should match its empty snapshot', () => {
    window.matchMedia = createMockMediaMatcher(false)

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
    window.matchMedia = createMockMediaMatcher(false)
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
    window.matchMedia = createMockMediaMatcher(false)
    const AvatarBadge = () => (
      <CheckedCircleIcon
        width="25"
        height="25"
        circleColor="#19b4fa"
        checkedColor="#fff"
      />
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
        >
          Custom text
        </Comment>,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
