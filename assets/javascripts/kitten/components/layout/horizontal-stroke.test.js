import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { HorizontalStroke } from 'kitten/components/layout/horizontal-stroke'

describe('<HorizontalStroke />', () => {
  describe('by default', () => {
    const horizontalStroke = shallow(<HorizontalStroke />)

    it('renders a <span />', () => {
      expect(horizontalStroke).to.have.tagName('span')
    })

    it('has good class', () => {
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

  describe('with size prop', () => {
    const horizontalStroke = shallow(<HorizontalStroke size="tiny" />)

    it('has a good utility class', () => {
      expect(horizontalStroke).to.have.className('k-HorizontalStroke--tiny')
    })
  })
})
