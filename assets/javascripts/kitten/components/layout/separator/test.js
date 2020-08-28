import React from 'react'
import { Separator } from '../../../components/layout/separator'

describe('<Separator />', () => {
  describe('by default', () => {
    const separator = shallow(<Separator />)

    it('is a <hr />', () => {
      expect(separator.is('hr')).toBe(true)
    })

    it('has good class', () => {
      expect(separator.hasClass('k-Separator')).toBe(true)
    })
  })

  describe('with darker prop', () => {
    const separator = shallow(<Separator darker />)

    it('has good class', () => {
      expect(separator.hasClass('k-Separator--darker')).toBe(true)
    })
  })

  describe('with className prop', () => {
    const separator = shallow(<Separator className="custom__class" />)

    it('has a custom class', () => {
      expect(separator.hasClass('custom__class')).toBe(true)
    })
  })

  describe('with other prop', () => {
    const separator = shallow(<Separator aria-hidden="true" />)

    it('has an aria-hidden attribute', () => {
      expect(separator.props()['aria-hidden']).toBe('true')
    })
  })
})
