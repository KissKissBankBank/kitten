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
        />,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
