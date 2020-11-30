import React from 'react'
import { StaticTooltip } from './index'

describe('<StaticTooltip />', () => {
  describe('by default', () => {
    const component = shallow(<StaticTooltip />)

    it('has the k-StaticTooltip class', () => {
      expect(component.hasClass('k-StaticTooltip')).toBe(true)
    })
  })

  describe('className prop', () => {
    const component = shallow(<StaticTooltip className="customClass" />)

    it('adds the customClass to the component', () => {
      expect(component.hasClass('customClass')).toBe(true)
    })
  })

  describe('arrowLeftPosition prop', () => {
    const component = shallow(<StaticTooltip arrowLeftPosition="150px" />)
    const arrow = component.find('.k-StaticTooltip__arrow')

    it('assigns a left style to the arrow', () => {
      expect(arrow.props().style).toMatchObject({ left: '150px' })
    })
  })

  describe('children prop', () => {
    const component = shallow(<StaticTooltip>Lorem ipsum</StaticTooltip>)

    it('assigns children', () => {
      expect(component.text()).toBe('Lorem ipsum')
    })
  })
})
