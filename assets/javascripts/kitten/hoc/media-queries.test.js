import React from 'react'
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

describe('mediaQueries()', () => {
  const originalMatchMedia = window.matchMedia
  let SimpleComponentWithMediaQueries
  let component

  beforeEach(() => {
    window.matchMedia = jest.fn()
  })

  afterEach(() => {
    window.matchMedia = originalMatchMedia
  })

  describe('by default', () => {
    beforeEach(() => {
      SimpleComponentWithMediaQueries = mediaQueries(SimpleComponent)
      component = mount(<SimpleComponentWithMediaQueries />)
    })

    it('renders the wrapped component', () => {
      expect(component.find(SimpleComponent)).toHaveLength(1)
    })

    it('push media queries props to wrapped component', () => {
      const wrappedComponent = component.find(SimpleComponent).first()

      expect(wrappedComponent.prop('viewportIsMobile')).toBeFalsy()
      expect(wrappedComponent.prop('viewportIsTabletOrLess')).toBeFalsy()
    })
  })
})
