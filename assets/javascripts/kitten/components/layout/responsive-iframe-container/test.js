import React from 'react'
import { ResponsiveIframeContainer } from '../../../components/layout/responsive-iframe-container'

describe('<ResponsiveIframeContainer />', () => {
  describe('by default', () => {
    const component = shallow(<ResponsiveIframeContainer />)

    it('is a <div />', () => {
      expect(component.is('div')).toBe(true)
    })

    it('has good class', () => {
      expect(component.hasClass('k-ResponsiveIframeContainer')).toBe(true)
    })

    it('has a ratio of 67.5%', () => {
      const ratioProp = { paddingBottom: '67.5%' }

      expect(component.props().style).toMatchObject(ratioProp)
    })
  })

  describe('with className prop', () => {
    const component = shallow(
      <ResponsiveIframeContainer className="custom__class" />,
    )

    it('has a custom class', () => {
      expect(component.hasClass('custom__class')).toBe(true)
    })
  })

  describe('with children prop', () => {
    const component = shallow(
      <ResponsiveIframeContainer>
        <iframe />
      </ResponsiveIframeContainer>,
    )

    it('has an iframe as child', () => {
      expect(component.find('iframe')).toHaveLength(1)
    })
  })

  describe('with ratio prop', () => {
    const component = shallow(<ResponsiveIframeContainer ratio="42" />)

    it('has a ratio of 42%', () => {
      const ratioProp = { paddingBottom: '42%' }

      expect(component.props().style).toMatchObject(ratioProp)
    })
  })
})
