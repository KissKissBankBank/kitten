import React from 'react'

import { Badge } from 'kitten/components/notifications/badge'

describe('<Badge />', () => {
  describe('by default', () => {
    const badge = shallow(<Badge />)

    test('is a <span />', () => {
      expect(badge).to.have.tagName('span')
    })

    test('has a default class', () => {
      expect(badge.hasClass('k-Badge')).toBe(true)
    })
  })

  describe('with className prop', () => {
    const badge = shallow(<Badge className="custom__class" />)

    test('has a custom class', () => {
      expect(badge.hasClass('custom__class')).toBe(true)
    })
  })

  describe('with spaced prop', () => {
    const badge = shallow(<Badge spaced />)

    test('has a good class', () => {
      expect(badge.hasClass('k-Badge--spaced')).toBe(true)
    })
  })

  describe('with other prop', () => {
    const badge = shallow(<Badge aria-hidden="true" />)

    test('has an aria-hidden attribute', () => {
      expect(badge).to.have.attr('aria-hidden', 'true')
    })
  })

  describe('with children', () => {
    const badge = shallow(<Badge>42</Badge>)

    test('has text', () => {
      expect(badge).to.have.text('42')
    })
  })
})
