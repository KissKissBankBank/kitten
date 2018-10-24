import React from 'react'
import renderer from 'react-test-renderer'
import { Timeline } from 'kitten/components/lists/timeline'

const createMockMediaMatcher = matches => () => ({
  matches,
  addListener: () => {},
  removeListener: () => {},
})

describe('<Timeline />', () => {
  let originalMatchMedia
  let component

  beforeEach(() => {
    originalMatchMedia = window.matchMedia
  })

  afterEach(() => {
    window.matchMedia = originalMatchMedia
  })

  describe('with default props', () => {
    beforeEach(() => {
      window.matchMedia = createMockMediaMatcher(false)
      component = renderer.create(<Timeline>foobar</Timeline>).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with itemHeight props', () => {
    beforeEach(() => {
      window.matchMedia = createMockMediaMatcher(false)
      component = renderer
        .create(<Timeline itemHeight="thin">foobar</Timeline>)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
