import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { StaticTooltip } from 'kitten/components/tooltips/static-tooltip'

describe('<StaticTooltip />', () => {
  describe('by default', () => {
    const component = shallow(<StaticTooltip />)

    it('a <StaticTooltip />', () => {
      expect(component).to.have.className('k-StaticTooltip')
    })
  })

  describe('className prop', () => {
    const component = shallow(<StaticTooltip className="customClass" />)

    it('has customClass', () => {
      expect(component).to.have.className('customClass')
    })
  })

  describe('arrowLeftPosition', () => {
    const component = shallow(<StaticTooltip arrowLeftPosition="150px" />)
    const arrow = component.find('.k-StaticTooltip__arrow')

    it('arrowLeftPosition prop', () => {
      expect(arrow).to.have.style('left', '150px')
    })
  })

  describe('children prop', () => {
    const component = shallow(<StaticTooltip>Lorem ipsum</StaticTooltip>)

    it('has children', () => {
      expect(component).to.have.text('Lorem ipsum')
    })
  })
})
