import React from 'react'
import { Pagination } from 'kitten/components/navigation/pagination'
import renderer from 'react-test-renderer'

const createMockMediaMatcher = matches => () => ({
  matches,
  addListener: () => {},
  removeListener: () => {}
})

describe('<Pagination />', () => {
  const originalMatchMedia = window.matchMedia

  beforeEach(() => {
    window.matchMedia = createMockMediaMatcher(false)
  })

  afterEach(() => {
    window.matchMedia = originalMatchMedia
  })

  describe('by default', () => {
    it('should match its empty snapshot', () => {
      const tree = renderer
        .create(<Pagination />)
        .toJSON()

      expect(tree).toMatchSnapshot()
    })
  })
})
