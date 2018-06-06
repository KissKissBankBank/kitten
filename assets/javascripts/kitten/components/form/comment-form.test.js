import React from 'react'
import renderer from 'react-test-renderer'
import { CommentForm } from 'kitten/components/form/comment-form'

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
            src: 'https://placehold.it/80x80/caf4fe/caf4fe',
            alt: '',
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
})
