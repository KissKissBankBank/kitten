import React from 'react'
import { shallow } from 'enzyme'
import { IconBadge } from 'kitten/components/notifications/icon-badge'

describe('<IconBadge />', () => {
  describe('by default', () => {
    const iconBadge = shallow(<IconBadge />)

    it('is a <span />', () => {
      expect(iconBadge).to.have.tagName('span')
    })

    it('has default classes', () => {
      expect(iconBadge).to.have.className('k-IconBadge')
      expect(iconBadge).to.have.descendants('.k-IconBadge__content')
    })
  })

  describe('with custom class', () => {
    const iconBadge = shallow(<IconBadge className="custom__class" />)

    it('has a custom class', () => {
      expect(iconBadge).to.have.className('custom__class')
    })
  })

  describe('with other prop', () => {
    const iconBadge = shallow(<IconBadge aria-hidden="true" />)

    it('has an aria-hidden attribute', () => {
      expect(iconBadge).to.have.attr('aria-hidden', 'true')
    })
  })

  describe('with children', () => {
    const iconBadge = shallow(<IconBadge>A+</IconBadge>)

    it('has text', () => {
      expect(iconBadge).to.have.text('A+')
    })
  })
})
