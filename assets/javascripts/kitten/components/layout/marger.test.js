import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { Marger } from 'kitten/components/layout/marger'

describe('<Marger />', () => {
  describe('by default', () => {
    const marger = shallow(<Marger />)

    it('is a <div />', () => {
      expect(marger).to.have.tagName('div')
    })
  })

  describe('with top prop', () => {
    const marger = shallow(<Marger top="1.5" />)

    it('has good styles', () => {
      expect(marger).to.have.style('margin-top', '0.9375rem')
    })
  })

  describe('with bottom prop', () => {
    const marger = shallow(<Marger bottom=".5" />)

    it('has good styles', () => {
      expect(marger).to.have.style('margin-bottom', '0.3125rem')
    })
  })

  describe('with other styles', () => {
    const marger = shallow(<Marger style={ { backgroundColor: 'red' } } />)

    it('has a custom style', () => {
      expect(marger).to.have.style('background-color', 'red')
    })
  })

  describe('with other prop', () => {
    const marger = shallow(<Marger className="custom__class">Lorem…</Marger>)

    it('has a custom class', () => {
      expect(marger).to.have.className('custom__class')
    })

    it('renders children', () => {
      expect(marger).to.have.text('Lorem…')
    })
  })
})
