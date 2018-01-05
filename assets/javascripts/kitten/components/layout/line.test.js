import React from 'react'
import { shallow } from 'enzyme'
import { Line } from 'kitten/components/layout/line'

describe('<Line />', () => {
  describe('by default', () => {
    const component = shallow(<Line />)

    it('renders a <div />', () => {
      expect(component).to.have.tagName('div')
    })

    it('has "k-Line" class', () => {
      expect(component).to.have.className('k-Line')
    })
  })

  describe('className prop', () => {
    const component = shallow(
      <Line className="test-Line--lorem" />
    )

    it('has a custom class', () => {
      expect(component).to.have.className('test-Line--lorem')
    })
  })

  describe('children prop', () => {
    const component = shallow(
      <Line>
        <p>Lorem ipsum…</p>
      </Line>
    ).children()

    it('renders a <p>', () => {
      expect(component).to.have.tagName('p')
    })
  })
})

describe('<Line.Item />', () => {
  describe('by default', () => {
    const component = shallow(<Line.Item />)

    it('renders a <div />', () => {
      expect(component).to.have.tagName('div')
    })

    it('has "k-Line__item" class', () => {
      expect(component).to.have.className('k-Line__item')
    })
  })

  describe('className prop', () => {
    const component = shallow(
      <Line className="test-Line__item--lorem" />
    )

    it('has a custom class', () => {
      expect(component).to.have.className('test-Line__item--lorem')
    })
  })

  describe('children prop', () => {
    const component = shallow(
      <Line>
        <p>Lorem ipsum…</p>
      </Line>
    ).children()

    it('renders a <p>', () => {
      expect(component).to.have.tagName('p')
    })
  })
})
