import React from 'react'

import { ResponsiveIframeContainer }
  from 'kitten/components/layout/responsive-iframe-container'

describe('<ResponsiveIframeContainer />', () => {
  describe('by default', () => {
    const component = shallow(<ResponsiveIframeContainer />)

    test('is a <div />', () => {
      expect(component).to.have.tagName('div')
    })

    test('has good class', () => {
      expect(component.hasClass('k-ResponsiveIframeContainer')).to.equal(true)
    })

    test('has a ratio of 67.5%', () => {
      const ratioProp = { paddingBottom: '67.5%' }

      expect(component).to.have.prop('style').toEqual(ratioProp)
    })
  })

  describe('with className prop', () => {
    const component = shallow(
      <ResponsiveIframeContainer className="custom__class" />
    )

    test('has a custom class', () => {
      expect(component.hasClass('custom__class')).to.equal(true)
    })
  })

  describe('with children prop', () => {
    const component = shallow(
      <ResponsiveIframeContainer>
        <iframe />
      </ResponsiveIframeContainer>
    )

    test('has an iframe as child', () => {
      expect(component.find('iframe')).toHaveLength(1)
    })
  })

  describe('with ratio prop', () => {
    const component = shallow(
      <ResponsiveIframeContainer ratio='42'/>
    )

    test('has a ratio of 42%', () => {
      const ratioProp = { paddingBottom: '42%' }

      expect(component).to.have.prop('style').toEqual(ratioProp)
    })
  })
})
