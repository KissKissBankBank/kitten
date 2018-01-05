import React from 'react'
import { mount } from 'enzyme'
import { Loader } from 'kitten/components/loaders/loader'

describe('<Loader />', () => {
  describe('by default', () => {
    const loader = mount(<Loader />)

    test('is a <div />', () => {
      expect(loader).to.have.tagName('div')
    })

    test('has a default class', () => {
      expect(loader.hasClass('k-Loader')).to.equal(true)
    })

    test('has 3 circles', () => {
      expect(loader.find('.k-Loader__circle')).toHaveLength(3)
    })
  })

  describe('with a span tag', () => {
    const loader = mount(<Loader tag="span" />)

    test('is a <span />', () => {
      expect(loader).to.have.tagName('span')
    })
  })

  describe('with a custom class', () => {
    const loader = mount(<Loader className="custom__class" />)

    test('is a good class', () => {
      expect(loader.hasClass('custom__class')).to.equal(true)
    })
  })

  describe('with color prop', () => {
    const loader = mount(<Loader color="red" />)
    const circle = loader.find('.k-Loader__circle').first().find('circle')

    test('has circles with red color', () => {
      expect(circle).to.have.attr('fill', 'red')
    })
  })
})
