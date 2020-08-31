import React from 'react'
import { Line } from '../../../components/layout/line'

describe('<Line />', () => {
  describe('by default', () => {
    const component = shallow(<Line />)

    it('renders a <div />', () => {
      expect(component.is('div')).toBe(true)
    })

    it('has "k-Line" class', () => {
      expect(component.hasClass('k-Line')).toBe(true)
    })
  })

  describe('className prop', () => {
    const component = shallow(<Line className="test-Line--lorem" />)

    it('has a custom class', () => {
      expect(component.hasClass('test-Line--lorem')).toBe(true)
    })
  })

  describe('children prop', () => {
    const component = shallow(
      <Line>
        <p>Lorem ipsum…</p>
      </Line>,
    ).children()

    it('renders a <p>', () => {
      expect(component.is('p')).toBe(true)
    })
  })
})

describe('<Line.Item />', () => {
  describe('by default', () => {
    const component = shallow(<Line.Item />)

    it('renders a <div />', () => {
      expect(component.is('div')).toBe(true)
    })

    it('has "k-Line__item" class', () => {
      expect(component.hasClass('k-Line__item')).toBe(true)
    })
  })

  describe('className prop', () => {
    const component = shallow(<Line className="test-Line__item--lorem" />)

    it('has a custom class', () => {
      expect(component.hasClass('test-Line__item--lorem')).toBe(true)
    })
  })

  describe('children prop', () => {
    const component = shallow(
      <Line>
        <p>Lorem ipsum…</p>
      </Line>,
    ).children()

    it('renders a <p>', () => {
      expect(component.is('p')).toBe(true)
    })
  })
})
