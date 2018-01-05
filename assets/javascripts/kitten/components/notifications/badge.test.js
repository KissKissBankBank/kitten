import React from 'react'
import { shallow } from 'enzyme'
import { Badge } from 'kitten/components/notifications/badge'

describe('<Badge />', () => {
  describe('by default', () => {
    const badge = shallow(<Badge />)

    it('is a <span />', () => {
      expect(badge).to.have.tagName('span')
    })

    it('has a default class', () => {
      expect(badge).to.have.className('k-Badge')
    })
  })

  describe('with className prop', () => {
    const badge = shallow(<Badge className="custom__class" />)

    it('has a custom class', () => {
      expect(badge).to.have.className('custom__class')
    })
  })

  describe('with spaced prop', () => {
    const badge = shallow(<Badge spaced />)

    it('has a good class', () => {
      expect(badge).to.have.className('k-Badge--spaced')
    })
  })

  describe('with other prop', () => {
    const badge = shallow(<Badge aria-hidden="true" />)

    it('has an aria-hidden attribute', () => {
      expect(badge).to.have.attr('aria-hidden', 'true')
    })
  })

  describe('with children', () => {
    const badge = shallow(<Badge>42</Badge>)

    it('has text', () => {
      expect(badge).to.have.text('42')
    })
  })
})
