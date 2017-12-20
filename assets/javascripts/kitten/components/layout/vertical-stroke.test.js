import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { VerticalStroke } from 'kitten/components/layout/vertical-stroke'

describe('<VerticalStroke />', () => {
  describe('by default', () => {
    const verticalStroke = shallow(<VerticalStroke />)

    it('renders a <span />', () => {
      expect(verticalStroke).to.have.tagName('span')
    })

    it('has good class', () => {
      expect(verticalStroke).to.have.className('k-VerticalStroke')
    })
  })

  describe('with className prop', () => {
    const verticalStroke = shallow(
      <VerticalStroke className="custom__class" />
    )

    it('has a good class', () => {
      expect(verticalStroke).to.have.className('custom__class')
    })
  })

  describe('with size="tiny" prop', () => {
    const verticalStroke = shallow(
      <VerticalStroke size="tiny" />
    )

    it('has a good class', () => {
      expect(verticalStroke).to.have.className('k-VerticalStroke--tiny')
    })
  })

  describe('with size="default" prop', () => {
    const verticalStroke = shallow(
      <VerticalStroke size="default" />
    )

    it('has a good class', () => {
      expect(verticalStroke).to.have.className('k-VerticalStroke--default')
    })
  })

  describe('with size="big" prop', () => {
    const verticalStroke = shallow(
      <VerticalStroke size="big" />
    )

    it('has a good class', () => {
      expect(verticalStroke).to.have.className('k-VerticalStroke--big')
    })
  })

  describe('with size="huge" prop', () => {
    const verticalStroke = shallow(
      <VerticalStroke size="huge" />
    )

    it('has a good class', () => {
      expect(verticalStroke).to.have.className('k-VerticalStroke--huge')
    })
  })
})
