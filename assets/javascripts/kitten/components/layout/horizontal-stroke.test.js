import React from 'react'
import { HorizontalStroke } from 'kitten/components/layout/horizontal-stroke'

describe('<HorizontalStroke />', () => {
  describe('by default', () => {
    const horizontalStroke = shallow(<HorizontalStroke />)

    it('renders a <span />', () => {
      expect(horizontalStroke.is('span')).toBe(true)
    })

    it('has a good class', () => {
      expect(horizontalStroke.hasClass('k-HorizontalStroke')).toBe(true)
    })
  })

  describe('with className prop', () => {
    const horizontalStroke = shallow(
      <HorizontalStroke className="custom__class" />,
    )

    it('has a good class', () => {
      expect(horizontalStroke.hasClass('custom__class')).toBe(true)
    })
  })

  describe('with size="tiny" prop', () => {
    const horizontalStroke = shallow(<HorizontalStroke size="tiny" />)

    it('has a good class', () => {
      expect(horizontalStroke.hasClass('k-HorizontalStroke--tiny')).toBe(true)
    })
  })

  describe('with size="default" prop', () => {
    const horizontalStroke = shallow(<HorizontalStroke size="default" />)

    it('has a good class', () => {
      expect(horizontalStroke.hasClass('k-HorizontalStroke--default')).toBe(
        true,
      )
    })
  })

  describe('with size="big" prop', () => {
    const horizontalStroke = shallow(<HorizontalStroke size="big" />)

    it('has a good class', () => {
      expect(horizontalStroke.hasClass('k-HorizontalStroke--big')).toBe(true)
    })
  })

  describe('with size="huge" prop', () => {
    const horizontalStroke = shallow(<HorizontalStroke size="huge" />)

    it('has a good class', () => {
      expect(horizontalStroke.hasClass('k-HorizontalStroke--huge')).toBe(true)
    })
  })
})
