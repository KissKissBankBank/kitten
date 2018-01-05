import React from 'react'
import { mount } from 'enzyme'
import { Loader } from 'kitten/components/loaders/loader'

describe('<Loader />', () => {
  describe('by default', () => {
    const loader = mount(<Loader />)

    it('is a <div />', () => {
      expect(loader).to.have.tagName('div')
    })

    it('has a default class', () => {
      expect(loader).to.have.className('k-Loader')
    })

    it('has 3 circles', () => {
      expect(loader.find('.k-Loader__circle')).toHaveLength(3)
    })
  })

  describe('with a span tag', () => {
    const loader = mount(<Loader tag="span" />)

    it('is a <span />', () => {
      expect(loader).to.have.tagName('span')
    })
  })

  describe('with a custom class', () => {
    const loader = mount(<Loader className="custom__class" />)

    it('is a good class', () => {
      expect(loader).to.have.className('custom__class')
    })
  })

  describe('with color prop', () => {
    const loader = mount(<Loader color="red" />)
    const circle = loader.find('.k-Loader__circle').first().find('circle')

    it('has circles with red color', () => {
      expect(circle).to.have.attr('fill', 'red')
    })
  })
})
