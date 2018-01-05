import React from 'react'

import { IconBadge } from 'kitten/components/notifications/icon-badge'

describe('<IconBadge />', () => {
  describe('by default', () => {
    const iconBadge = shallow(<IconBadge />)

    test('is a <span />', () => {
      expect(iconBadge).to.have.tagName('span')
    })

    test('has default classes', () => {
      expect(iconBadge.hasClass('k-IconBadge')).to.equal(true)
      expect(iconBadge).to.have.descendants('.k-IconBadge__content')
    })
  })

  describe('with custom class', () => {
    const iconBadge = shallow(<IconBadge className="custom__class" />)

    test('has a custom class', () => {
      expect(iconBadge.hasClass('custom__class')).to.equal(true)
    })
  })

  describe('with other prop', () => {
    const iconBadge = shallow(<IconBadge aria-hidden="true" />)

    test('has an aria-hidden attribute', () => {
      expect(iconBadge).to.have.attr('aria-hidden', 'true')
    })
  })

  describe('with children', () => {
    const iconBadge = shallow(<IconBadge>A+</IconBadge>)

    test('has text', () => {
      expect(iconBadge).to.have.text('A+')
    })
  })
})
