import React, { Component } from 'react'
import renderer from 'react-test-renderer'
import { mediaQueries } from './media-queries'

class SimpleComponent extends Component {
  render() {
    const {
      viewportIsMobile,
      viewportIsTabletOrLess,
      viewportIsXXS,
      viewportIsXSOrLess,
      viewportIsSOrLess,
      viewportIsMOrLess,
      viewportIsLOrLess,
      myCustomMediaQuery,
      ...props
    } = this.props

    return <div title="Test me!" {...props} />
  }
}

const mockAddListener = jest.fn()
const mockRemoveListener = jest.fn()

const createMockMediaMatcher = matches => () => {
  return {
    matches,
    addListener: mockAddListener,
    removeListener: mockRemoveListener,
  }
}

describe('mediaQueries()', () => {
  const originalMatchMedia = window.matchMedia
  let SimpleComponentWithMediaQueries
  let component
  let componentSnapshot

  beforeEach(() => {
    window.matchMedia = createMockMediaMatcher(false)
  })

  afterEach(() => {
    window.matchMedia = originalMatchMedia
  })

  describe('by default', () => {
    beforeEach(() => {
      SimpleComponentWithMediaQueries = mediaQueries(SimpleComponent, {
        viewportIsXSOrLess: true,
        viewportIsSOrLess: true,
        viewportIsMOrLess: true,
        viewportIsLOrLess: true,
      })
      component = renderer
        .create(<SimpleComponentWithMediaQueries />)
        .toJSON()
    })

    it('renders the wrapped component', () => {
      expect(component).toMatchSnapshot()
    })

    it('attaches listeners', () => {
      expect(mockAddListener).toHaveBeenCalled()
    })
  })
})
