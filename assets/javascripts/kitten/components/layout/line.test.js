import React from 'react'

import { Line } from 'kitten/components/layout/line'

describe('<Line />', () => {
  describe('by default', () => {
    const component = shallow(<Line />)

    test('renders a <div />', () => {
      expect(component).to.have.tagName('div')
    })

    test('has "k-Line" class', () => {
      expect(component.hasClass('k-Line')).toBe(true)
    })
  })

  describe('className prop', () => {
    const component = shallow(
      <Line className="test-Line--lorem" />
    )

    test('has a custom class', () => {
      expect(component.hasClass('test-Line--lorem')).toBe(true)
    })
  })

  describe('children prop', () => {
    const component = shallow(
      <Line>
        <p>Lorem ipsum…</p>
      </Line>
    ).children()

    test('renders a <p>', () => {
      expect(component).to.have.tagName('p')
    })
  })
})

describe('<Line.Item />', () => {
  describe('by default', () => {
    const component = shallow(<Line.Item />)

    test('renders a <div />', () => {
      expect(component).to.have.tagName('div')
    })

    test('has "k-Line__item" class', () => {
      expect(component.hasClass('k-Line__item')).toBe(true)
    })
  })

  describe('className prop', () => {
    const component = shallow(
      <Line className="test-Line__item--lorem" />
    )

    test('has a custom class', () => {
      expect(component.hasClass('test-Line__item--lorem')).toBe(true)
    })
  })

  describe('children prop', () => {
    const component = shallow(
      <Line>
        <p>Lorem ipsum…</p>
      </Line>
    ).children()

    test('renders a <p>', () => {
      expect(component).to.have.tagName('p')
    })
  })
})
