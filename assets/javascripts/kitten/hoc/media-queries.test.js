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
      component = mount(<SimpleComponentWithMediaQueries />)
      componentSnapshot = renderer
        .create(<SimpleComponentWithMediaQueries />)
        .toJSON()
    })

    it('renders the wrapped component', () => {
      expect(componentSnapshot).toMatchSnapshot()
    })

    it('pushes media queries props to wrapped component', () => {
      const wrappedComponent = component.find(SimpleComponent).first()

      expect(wrappedComponent.prop('viewportIsXXS')).toBeFalsy()
      expect(wrappedComponent.prop('viewportIsXSOrLess')).toBeFalsy()
      expect(wrappedComponent.prop('viewportIsSOrLess')).toBeFalsy()
      expect(wrappedComponent.prop('viewportIsMOrLess')).toBeFalsy()
      expect(wrappedComponent.prop('viewportIsLOrLess')).toBeFalsy()
    })

    it('attaches listeners', () => {
      expect(mockAddListener).toHaveBeenCalled()
    })

    it('removes listeners', () => {
      component.instance().componentWillUnmount()
      expect(mockRemoveListener).toHaveBeenCalled()
    })
  })

  describe('with M or less version', () => {
    beforeEach(() => {
      window.matchMedia = createMockMediaMatcher(true)
      SimpleComponentWithMediaQueries = mediaQueries(SimpleComponent, {
        viewportIsMOrLess: true,
      })
      component = mount(<SimpleComponentWithMediaQueries />)
    })

    it('pushes media queries props to wrapped component', () => {
      const wrappedComponent = component.find(SimpleComponent).first()

      expect(wrappedComponent.prop('viewportIsXXS')).toBeFalsy()
      expect(wrappedComponent.prop('viewportIsXSOrLess')).toBeFalsy()
      expect(wrappedComponent.prop('viewportIsSOrLess')).toBeFalsy()
      expect(wrappedComponent.prop('viewportIsMOrLess')).toBeTruthy()
      expect(wrappedComponent.prop('viewportIsLOrLess')).toBeFalsy()
    })
  })

  describe('with S or less version', () => {
    beforeEach(() => {
      window.matchMedia = createMockMediaMatcher(true)
      SimpleComponentWithMediaQueries = mediaQueries(SimpleComponent, {
        viewportIsSOrLess: true,
      })
      component = mount(<SimpleComponentWithMediaQueries />)
    })

    it('pushes media queries props to wrapped component', () => {
      const wrappedComponent = component.find(SimpleComponent).first()

      expect(wrappedComponent.prop('viewportIsXXS')).toBeFalsy()
      expect(wrappedComponent.prop('viewportIsXSOrLess')).toBeFalsy()
      expect(wrappedComponent.prop('viewportIsSOrLess')).toBeTruthy()
      expect(wrappedComponent.prop('viewportIsMOrLess')).toBeFalsy()
      expect(wrappedComponent.prop('viewportIsLOrLess')).toBeFalsy()
    })
  })

  describe('with custom media query', () => {
    beforeEach(() => {
      window.matchMedia = createMockMediaMatcher(true)
      SimpleComponentWithMediaQueries = mediaQueries(SimpleComponent, {
        myCustomMediaQuery: '(min-width: 1140px)',
      })
      component = mount(<SimpleComponentWithMediaQueries />)
    })

    it('pushes media queries props to wrapped component', () => {
      const wrappedComponent = component.find(SimpleComponent).first()

      expect(wrappedComponent.prop('myCustomMediaQuery')).toBeDefined()
      expect(wrappedComponent.prop('viewportIsXXS')).toBeFalsy()
      expect(wrappedComponent.prop('viewportIsXSOrLess')).toBeFalsy()
      expect(wrappedComponent.prop('viewportIsSOrLess')).toBeFalsy()
      expect(wrappedComponent.prop('viewportIsMOrLess')).toBeFalsy()
      expect(wrappedComponent.prop('viewportIsLOrLess')).toBeFalsy()
    })
  })

  describe('with deprecated versions', () => {
    beforeEach(() => {
      window.matchMedia = createMockMediaMatcher(true)
      SimpleComponentWithMediaQueries = mediaQueries(SimpleComponent, {
        viewportIsTabletOrLess: true,
        viewportIsMobile: true,
      })
      component = mount(<SimpleComponentWithMediaQueries />)
    })

    it('pushes media queries props to wrapped component', () => {
      const wrappedComponent = component.find(SimpleComponent).first()

      expect(wrappedComponent.prop('viewportIsTabletOrLess')).toBeTruthy()
      expect(wrappedComponent.prop('viewportIsMobile')).toBeTruthy()
    })
  })
})
