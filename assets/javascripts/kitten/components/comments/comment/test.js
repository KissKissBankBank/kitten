import React from 'react'
import renderer from 'react-test-renderer'
import { Comment } from './index'
import { CheckedCircleIcon } from '../../../components/icons/checked-circle-icon'

const createMockMediaMatcher = matches => () => ({
  matches,
  addListener: () => {},
  removeListener: () => {},
})

describe('<Comment />', () => {
  let originalMatchMedia
  let component

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
          text="Custom text"
          ownerName="Custom name"
          counterLikes="4"
        />,
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
          text="Custom text"
          ownerName="Custom name"
          bottomNotes={<BottomNotes />}
          counterLikes="4"
        />,
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
          text="Custom text"
          ownerName="Custom name"
          avatarBadge={<AvatarBadge />}
        />,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
