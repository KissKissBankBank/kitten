import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { ResponsiveVideoIframe } from 'kitten/components/layout/responsive-video-iframe'

describe('<ResponsiveVideoIframe />', () => {
  describe('by default', () => {
    const component = shallow(<ResponsiveVideoIframe />)

    it('is a <div />', () => {
      expect(component).to.have.tagName('div')
    })

    it('has good class', () => {
      expect(component).to.have.className('k-ResponsiveVideoIframe')
    })

    it('has a ratio of 67.5%', () => {
      expect(component).to.have.prop('style').deep.equal({ paddingBottom: '67.5%' })
    })
  })

  describe('with className prop', () => {
    const component = shallow(<ResponsiveVideoIframe className="custom__class" />)

    it('has a custom class', () => {
      expect(component).to.have.className('custom__class')
    })
  })

  describe('with children prop', () => {
    const component = shallow(
      <ResponsiveVideoIframe>
        <iframe />
      </ResponsiveVideoIframe>
    )

    it('has an iframe has child', () => {
      expect(component.find('iframe')).to.have.length(1)
    })
  })
})
