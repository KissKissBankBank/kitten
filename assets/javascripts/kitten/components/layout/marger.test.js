import React from 'react'
import { Marger } from 'kitten/components/layout/marger'

describe('<Marger />', () => {
  describe('by default', () => {
    const marger = shallow(<Marger />)

    it('is a <div />', () => {
      expect(marger.is('div')).toBe(true)
    })
  })

  describe('with top prop', () => {
    const marger = shallow(<Marger top="1.5" />)

    it('has good styles', () => {
      expect(marger.props().style).toMatchObject({ marginTop: '0.9375rem' })
    })
  })

  describe('with bottom prop', () => {
    const marger = shallow(<Marger bottom=".5" />)

    it('has good styles', () => {
      expect(marger.props().style).toMatchObject({ marginBottom: '0.3125rem' })
    })
  })

  describe('with other styles', () => {
    const marger = shallow(<Marger style={ { backgroundColor: 'red' } } />)

    it('has a custom style', () => {
      expect(marger.props().style).toMatchObject({ backgroundColor: 'red' })
    })
  })

  describe('with other prop', () => {
    const marger = shallow(<Marger className="custom__class">Lorem…</Marger>)

    it('has a custom class', () => {
      expect(marger.hasClass('custom__class')).toBe(true)
    })

    it('renders children', () => {
      expect(marger.text()).toBe('Lorem…')
    })
  })
})
