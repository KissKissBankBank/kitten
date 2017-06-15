import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { ResponsiveVideoIframeContainer } from
  'kitten/components/layout/responsive-video-iframe-container'

describe('<ResponsiveVideoIframeContainer />', () => {
  describe('by default', () => {
    const component = shallow(<ResponsiveVideoIframeContainer />)

    it('is a <div />', () => {
      expect(component).to.have.tagName('div')
    })

    it('has good class', () => {
      expect(component).to.have.className('k-ResponsiveVideoIframeContainer')
    })

    it('has a ratio of 67.5%', () => {
      const ratioProp = { paddingBottom: '67.5%' }

      expect(component).to.have.prop('style').deep.equal(ratioProp)
    })
  })

  describe('with className prop', () => {
    const component = shallow(
      <ResponsiveVideoIframeContainer className="custom__class" />
    )

    it('has a custom class', () => {
      expect(component).to.have.className('custom__class')
    })
  })

  describe('with children prop', () => {
    const component = shallow(
      <ResponsiveVideoIframeContainer>
        <iframe />
      </ResponsiveVideoIframeContainer>
    )

    it('has an iframe as child', () => {
      expect(component.find('iframe')).to.have.length(1)
    })
  })

  describe('with ratio prop', () => {
    const component = shallow(
      <ResponsiveVideoIframeContainer ratio='42'/>
    )

    it('has a ratio of 42%', () => {
      const ratioProp = { paddingBottom: '42%' }

      expect(component).to.have.prop('style').deep.equal(ratioProp)
    })
  })
})
