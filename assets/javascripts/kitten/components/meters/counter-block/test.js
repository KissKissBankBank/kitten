import React from 'react'
import renderer from 'react-test-renderer'
import { CounterBlock } from './index'

const createMockMediaMatcher = matches => () => ({
  matches,
  addListener: () => {},
  removeListener: () => {},
})

describe('<CounterBlock />', () => {
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
      component = renderer
        .create(<CounterBlock title="foo" subTitle="bar" counter="13 106" />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
