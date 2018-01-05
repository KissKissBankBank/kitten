import React from 'react'

import { HorizontalStroke } from 'kitten/components/layout/horizontal-stroke'

describe('<HorizontalStroke />', () => {
  describe('by default', () => {
    const horizontalStroke = shallow(
      <HorizontalStroke />
    )

    test('renders a <span />', () => {
      expect(horizontalStroke).to.have.tagName('span')
    })

    test('has a good class', () => {
      expect(horizontalStroke.hasClass('k-HorizontalStroke')).toBe(true)
    })
  })

  describe('with className prop', () => {
    const horizontalStroke = shallow(
      <HorizontalStroke className="custom__class" />
    )

    test('has a good class', () => {
      expect(horizontalStroke.hasClass('custom__class')).toBe(true)
    })
  })

  describe('with size="tiny" prop', () => {
    const horizontalStroke = shallow(
      <HorizontalStroke size="tiny" />
    )

    test('has a good class', () => {
      expect(horizontalStroke.hasClass('k-HorizontalStroke--tiny')).toBe(true)
    })
  })

  describe('with size="default" prop', () => {
    const horizontalStroke = shallow(
      <HorizontalStroke size="default" />
    )

    test('has a good class', () => {
      expect(horizontalStroke.hasClass('k-HorizontalStroke--default')).toBe(true)
    })
  })

  describe('with size="big" prop', () => {
    const horizontalStroke = shallow(
      <HorizontalStroke size="big" />
    )

    test('has a good class', () => {
      expect(horizontalStroke.hasClass('k-HorizontalStroke--big')).toBe(true)
    })
  })

  describe('with size="huge" prop', () => {
    const horizontalStroke = shallow(
      <HorizontalStroke size="huge" />
    )

    test('has a good class', () => {
      expect(horizontalStroke.hasClass('k-HorizontalStroke--huge')).toBe(true)
    })
  })
})
