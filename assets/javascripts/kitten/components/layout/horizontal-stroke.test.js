import React from 'react'
import { shallow } from 'enzyme'
import { HorizontalStroke } from 'kitten/components/layout/horizontal-stroke'

describe('<HorizontalStroke />', () => {
  describe('by default', () => {
    const horizontalStroke = shallow(
      <HorizontalStroke />
    )

    it('renders a <span />', () => {
      expect(horizontalStroke).to.have.tagName('span')
    })

    it('has a good class', () => {
      expect(horizontalStroke).to.have.className('k-HorizontalStroke')
    })
  })

  describe('with className prop', () => {
    const horizontalStroke = shallow(
      <HorizontalStroke className="custom__class" />
    )

    it('has a good class', () => {
      expect(horizontalStroke).to.have.className('custom__class')
    })
  })

  describe('with size="tiny" prop', () => {
    const horizontalStroke = shallow(
      <HorizontalStroke size="tiny" />
    )

    it('has a good class', () => {
      expect(horizontalStroke).to.have.className('k-HorizontalStroke--tiny')
    })
  })

  describe('with size="default" prop', () => {
    const horizontalStroke = shallow(
      <HorizontalStroke size="default" />
    )

    it('has a good class', () => {
      expect(horizontalStroke).to.have.className('k-HorizontalStroke--default')
    })
  })

  describe('with size="big" prop', () => {
    const horizontalStroke = shallow(
      <HorizontalStroke size="big" />
    )

    it('has a good class', () => {
      expect(horizontalStroke).to.have.className('k-HorizontalStroke--big')
    })
  })

  describe('with size="huge" prop', () => {
    const horizontalStroke = shallow(
      <HorizontalStroke size="huge" />
    )

    it('has a good class', () => {
      expect(horizontalStroke).to.have.className('k-HorizontalStroke--huge')
    })
  })
})
