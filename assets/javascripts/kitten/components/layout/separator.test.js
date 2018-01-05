import React from 'react'

import { Separator } from 'kitten/components/layout/separator'

describe('<Separator />', () => {
  describe('by default', () => {
    const separator = shallow(<Separator />)

    test('is a <hr />', () => {
      expect(separator).to.have.tagName('hr')
    })

    test('has good class', () => {
      expect(separator.hasClass('k-Separator')).to.equal(true)
    })
  })

  describe('with darker prop', () => {
    const separator = shallow(<Separator darker />)

    test('has good class', () => {
      expect(separator.hasClass('k-Separator--darker')).to.equal(true)
    })
  })

  describe('with className prop', () => {
    const separator = shallow(<Separator className="custom__class" />)

    test('has a custom class', () => {
      expect(separator.hasClass('custom__class')).to.equal(true)
    })
  })

  describe('with other prop', () => {
    const separator = shallow(<Separator aria-hidden="true" />)

    test('has an aria-hidden attribute', () => {
      expect(separator).to.have.attr('aria-hidden', 'true')
    })
  })
})
