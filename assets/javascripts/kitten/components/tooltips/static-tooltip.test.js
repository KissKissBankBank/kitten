import React from 'react'

import { StaticTooltip } from 'kitten/components/tooltips/static-tooltip'

describe('<StaticTooltip />', () => {
  describe('by default', () => {
    const component = shallow(<StaticTooltip />)

    test('has the k-StaticTooltip class', () => {
      expect(component.hasClass('k-StaticTooltip')).to.equal(true)
    })
  })

  describe('className prop', () => {
    const component = shallow(<StaticTooltip className="customClass" />)

    test('adds the customClass to the component', () => {
      expect(component.hasClass('customClass')).to.equal(true)
    })
  })

  describe('arrowLeftPosition prop', () => {
    const component = shallow(<StaticTooltip arrowLeftPosition="150px" />)
    const arrow = component.find('.k-StaticTooltip__arrow')

    test('assigns a left style to the arrow', () => {
      expect(arrow).to.have.style('left', '150px')
    })
  })

  describe('children prop', () => {
    const component = shallow(<StaticTooltip>Lorem ipsum</StaticTooltip>)

    test('assigns children', () => {
      expect(component).to.have.text('Lorem ipsum')
    })
  })
})
