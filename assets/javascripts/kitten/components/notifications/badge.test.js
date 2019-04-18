import React from 'react'
import { Badge } from './badge'

fdescribe('<Badge />', () => {
  describe('by default', () => {
    const badge = render(<Badge />)

    it('is a <div />', () => {
      expect(badge.is('div')).toBe(true)
    })

    it('has a default class', () => {
      expect(badge.find('span').hasClass('k-Badge')).toBe(true)
    })
  })

  describe('with className prop', () => {
    const badge = render(<Badge className="custom__class" />)

    it('has a custom class', () => {
      expect(badge.find('span').hasClass('custom__class')).toBe(true)
    })
  })

  describe('with spaced prop', () => {
    const badge = render(<Badge spaced />)

    it('has a good class', () => {
      expect(badge.find('span').hasClass('k-Badge--spaced')).toBe(true)
    })
  })

  describe('with other prop', () => {
    const badge = render(<Badge aria-hidden="true" />)
    console.log(badge.find('span'))
    it('has an aria-hidden attribute', () => {
      expect(badge.find('span').prop('aria-hidden')).toBe('true')
    })
  })

  describe('with children', () => {
    const badge = render(<Badge>42</Badge>)

    it('has text', () => {
      expect(badge.text()).toBe('42')
    })
  })
})
