import React from 'react'

import { VerticalStroke } from 'kitten/components/layout/vertical-stroke'

describe('<VerticalStroke />', () => {
  describe('by default', () => {
    const verticalStroke = shallow(<VerticalStroke />)

    test('renders a <span />', () => {
      expect(verticalStroke).to.have.tagName('span')
    })

    test('has a good class', () => {
      expect(verticalStroke.hasClass('k-VerticalStroke')).to.equal(true)
    })
  })

  describe('with className prop', () => {
    const verticalStroke = shallow(
      <VerticalStroke className="custom__class" />
    )

    test('has a good class', () => {
      expect(verticalStroke.hasClass('custom__class')).to.equal(true)
    })
  })

  describe('with size="tiny" prop', () => {
    const verticalStroke = shallow(
      <VerticalStroke size="tiny" />
    )

    test('has a good class', () => {
      expect(verticalStroke.hasClass('k-VerticalStroke--tiny')).to.equal(true)
    })
  })

  describe('with size="default" prop', () => {
    const verticalStroke = shallow(
      <VerticalStroke size="default" />
    )

    test('has a good class', () => {
      expect(verticalStroke.hasClass('k-VerticalStroke--default')).to.equal(true)
    })
  })

  describe('with size="big" prop', () => {
    const verticalStroke = shallow(
      <VerticalStroke size="big" />
    )

    test('has a good class', () => {
      expect(verticalStroke.hasClass('k-VerticalStroke--big')).to.equal(true)
    })
  })

  describe('with size="huge" prop', () => {
    const verticalStroke = shallow(
      <VerticalStroke size="huge" />
    )

    test('has a good class', () => {
      expect(verticalStroke.hasClass('k-VerticalStroke--huge')).to.equal(true)
    })
  })
})
