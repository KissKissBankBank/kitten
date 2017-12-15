import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { VerticalStroke } from 'kitten/components/layout/Vertical-stroke'

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

  describe('with size prop', () => {
    const verticalStroke = shallow(<VerticalStroke size="tiny" />)

    it('has a good utility class', () => {
      expect(verticalStroke).to.have.className('k-VerticalStroke--tiny')
    })
  })
})
