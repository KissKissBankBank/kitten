import React from 'react'
import renderer from 'react-test-renderer'
import { mediaQueries } from 'kitten/hoc/media-queries'

const SimpleComponent = ({
  viewportIsMobile,
  viewportIsTabletOrLess,
  ...props
}) => {
  return (
    <div title="Test me!" { ...props } />
  )
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
      SimpleComponentWithMediaQueries = mediaQueries(SimpleComponent)
      component = mount(<SimpleComponentWithMediaQueries />)
      componentSnapshot = renderer
        .create(<SimpleComponentWithMediaQueries />)
        .toJSON()
    })

    it('renders the wrapped component', () => {
      expect(componentSnapshot).toMatchSnapshot()
    })

    it('push media queries props to wrapped component', () => {
      const wrappedComponent = component.find(SimpleComponent).first()

      expect(wrappedComponent.prop('viewportIsMobile')).toBeFalsy()
      expect(wrappedComponent.prop('viewportIsTabletOrLess')).toBeFalsy()
    })

    it('attaches listeners', () => {
      expect(mockAddListener).toHaveBeenCalled()
    })

    it('removes listeners', () => {
      component.instance().componentWillUnmount()
      expect(mockRemoveListener).toHaveBeenCalled()
    })
  })

  describe('with tablet or less version', () => {
    beforeEach(() => {
      window.matchMedia = createMockMediaMatcher(true)

      component = mount(<SimpleComponentWithMediaQueries />)
    })

    it('push media queries props to wrapped component', () => {
      const wrappedComponent = component.find(SimpleComponent).first()

      expect(wrappedComponent.prop('viewportIsMobile')).toBeTruthy()
      expect(wrappedComponent.prop('viewportIsTabletOrLess')).toBeTruthy()
    })
  })
})
