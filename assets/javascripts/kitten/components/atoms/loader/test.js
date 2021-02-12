import React from 'react'
import { Loader } from './index'

describe('<Loader />', () => {
  describe('by default', () => {
    const loader = mount(<Loader />)

    it('is a <div />', () => {
      expect(loader.render().is('div')).toBe(true)
    })

    it('has a default class', () => {
      expect(loader.render().hasClass('k-Loader')).toBe(true)
    })

    it('has 3 circles', () => {
      expect(loader.render().find('.k-Loader__circle')).toHaveLength(3)
    })
  })

  describe('with a span tag', () => {
    const loader = mount(<Loader tag="span" />)

    it('is a <span />', () => {
      expect(loader.render().is('span')).toBe(true)
    })
  })

  describe('with a custom class', () => {
    const loader = mount(<Loader className="custom__class" />)

    it('is a good class', () => {
      expect(loader.render().hasClass('custom__class')).toBe(true)
    })
  })

  describe('with color prop', () => {
    const loader = mount(<Loader color="red" />)
    const circle = loader.find('.k-Loader__circle').first().find('circle')

    it('has circles with red color', () => {
      expect(circle.props().fill).toBe('red')
    })
  })
})
