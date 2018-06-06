import React from 'react'
import renderer from 'react-test-renderer'
import { Comment } from 'kitten/components/form/comment'

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
        />,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
