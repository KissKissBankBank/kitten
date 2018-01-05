import React from 'react'
import { shallow } from 'enzyme'
import { Separator } from 'kitten/components/layout/separator'

describe('<Separator />', () => {
  describe('by default', () => {
    const separator = shallow(<Separator />)

    it('is a <hr />', () => {
      expect(separator).to.have.tagName('hr')
    })

    it('has good class', () => {
      expect(separator).to.have.className('k-Separator')
    })
  })

  describe('with darker prop', () => {
    const separator = shallow(<Separator darker />)

    it('has good class', () => {
      expect(separator).to.have.className('k-Separator--darker')
    })
  })

  describe('with className prop', () => {
    const separator = shallow(<Separator className="custom__class" />)

    it('has a custom class', () => {
      expect(separator).to.have.className('custom__class')
    })
  })

  describe('with other prop', () => {
    const separator = shallow(<Separator aria-hidden="true" />)

    it('has an aria-hidden attribute', () => {
      expect(separator).to.have.attr('aria-hidden', 'true')
    })
  })
})
