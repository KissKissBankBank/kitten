import React from 'react'
import { shallow } from 'enzyme'
import { ResponsiveIframeContainer }
  from 'kitten/components/layout/responsive-iframe-container'

describe('<ResponsiveIframeContainer />', () => {
  describe('by default', () => {
    const component = shallow(<ResponsiveIframeContainer />)

    it('is a <div />', () => {
      expect(component).to.have.tagName('div')
    })

    it('has good class', () => {
      expect(component).to.have.className('k-ResponsiveIframeContainer')
    })

    it('has a ratio of 67.5%', () => {
      const ratioProp = { paddingBottom: '67.5%' }

      expect(component).to.have.prop('style').toEqual(ratioProp)
    })
  })

  describe('with className prop', () => {
    const component = shallow(
      <ResponsiveIframeContainer className="custom__class" />
    )

    it('has a custom class', () => {
      expect(component).to.have.className('custom__class')
    })
  })

  describe('with children prop', () => {
    const component = shallow(
      <ResponsiveIframeContainer>
        <iframe />
      </ResponsiveIframeContainer>
    )

    it('has an iframe as child', () => {
      expect(component.find('iframe')).toHaveLength(1)
    })
  })

  describe('with ratio prop', () => {
    const component = shallow(
      <ResponsiveIframeContainer ratio='42'/>
    )

    it('has a ratio of 42%', () => {
      const ratioProp = { paddingBottom: '42%' }

      expect(component).to.have.prop('style').toEqual(ratioProp)
    })
  })
})
