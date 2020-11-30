import React from 'react'
import { VerticalStroke } from '../../../components/layout/vertical-stroke'

describe('<VerticalStroke />', () => {
  describe('by default', () => {
    const verticalStroke = shallow(<VerticalStroke />)

    it('renders a <span />', () => {
      expect(verticalStroke.is('span')).toBe(true)
    })

    it('has a good class', () => {
      expect(verticalStroke.hasClass('k-VerticalStroke')).toBe(true)
    })
  })

  describe('with className prop', () => {
    const verticalStroke = shallow(<VerticalStroke className="custom__class" />)

    it('has a good class', () => {
      expect(verticalStroke.hasClass('custom__class')).toBe(true)
    })
  })

  describe('with size="tiny" prop', () => {
    const verticalStroke = shallow(<VerticalStroke size="tiny" />)

    it('has a good class', () => {
      expect(verticalStroke.hasClass('k-VerticalStroke--tiny')).toBe(true)
    })
  })

  describe('with size="default" prop', () => {
    const verticalStroke = shallow(<VerticalStroke size="default" />)

    it('has a good class', () => {
      expect(verticalStroke.hasClass('k-VerticalStroke--default')).toBe(true)
    })
  })

  describe('with size="big" prop', () => {
    const verticalStroke = shallow(<VerticalStroke size="big" />)

    it('has a good class', () => {
      expect(verticalStroke.hasClass('k-VerticalStroke--big')).toBe(true)
    })
  })

  describe('with size="huge" prop', () => {
    const verticalStroke = shallow(<VerticalStroke size="huge" />)

    it('has a good class', () => {
      expect(verticalStroke.hasClass('k-VerticalStroke--huge')).toBe(true)
    })
  })
})
