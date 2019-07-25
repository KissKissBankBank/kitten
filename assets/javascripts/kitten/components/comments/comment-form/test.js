import React from 'react'
import renderer from 'react-test-renderer'
import { CommentForm } from './index'
import { CheckedCircleIcon } from '../../../components/icons/checked-circle-icon'

const createMockMediaMatcher = matches => () => ({
  matches,
  addListener: () => {},
  removeListener: () => {},
})

describe('<CommentForm />', () => {
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
        <CommentForm
          avatarImgProps={{
            src: '#image',
            alt: 'Image alt',
          }}
          placeholder="Leave a comment on the project"
          commentButton="Comment"
          errorMessage="Cum sociis natoque penatibus et magnis"
          error
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
        <CommentForm
          avatarImgProps={{
            src: '#image',
            alt: 'Image alt',
          }}
          placeholder="Leave a comment on the project"
          commentButton="Comment"
          errorMessage="Cum sociis natoque penatibus et magnis"
          error
          avatarBadge={<AvatarBadge />}
        />,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
