import React from 'react'
import { shallow } from 'enzyme'
import { StaticTooltip } from 'kitten/components/tooltips/static-tooltip'

describe('<StaticTooltip />', () => {
  describe('by default', () => {
    const component = shallow(<StaticTooltip />)

    it('has the k-StaticTooltip class', () => {
      expect(component).to.have.className('k-StaticTooltip')
    })
  })

  describe('className prop', () => {
    const component = shallow(<StaticTooltip className="customClass" />)

    it('adds the customClass to the component', () => {
      expect(component).to.have.className('customClass')
    })
  })

  describe('arrowLeftPosition prop', () => {
    const component = shallow(<StaticTooltip arrowLeftPosition="150px" />)
    const arrow = component.find('.k-StaticTooltip__arrow')

    it('assigns a left style to the arrow', () => {
      expect(arrow).to.have.style('left', '150px')
    })
  })

  describe('children prop', () => {
    const component = shallow(<StaticTooltip>Lorem ipsum</StaticTooltip>)

    it('assigns children', () => {
      expect(component).to.have.text('Lorem ipsum')
    })
  })
})
