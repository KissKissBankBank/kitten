import React from 'react'
import { SupTitle } from './index'

describe('<SupTitle />', () => {
  describe('by default', () => {
    const component = shallow(<SupTitle />)

    it('renders a <div class="k-SupTitle" />', () => {
      expect(component.hasClass('k-SupTitle')).toBe(true)
    })

    it('with default children', () => {
      expect(component.text()).toBe('Lorem ipsum')
    })
  })

  describe('className prop', () => {
    const component = mount(<SupTitle className="customClass" />)

    it('adds the customClass to the component', () => {
      expect(component.hasClass('customClass')).toBe(true)
    })
  })

  describe('tag prop', () => {
    const component = mount(<SupTitle tag="h1" />)

    it('changes the tag of the component', () => {
      expect(component.render().is('h1')).toBe(true)
    })
  })

  describe('with children', () => {
    const component = mount(<SupTitle>Lorem ipsum…</SupTitle>)

    it('has a content', () => {
      expect(component.text()).toBe('Lorem ipsum…')
    })
  })
})
