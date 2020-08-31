import React from 'react'
import { Button } from '../../../../components/buttons/button'

describe('Button with default props', () => {
  const component = shallow(<Button />)

  describe('by default', () => {
    it('is a <button>', () => {
      expect(component.type()).toBe('button')
    })

    it('has a k-Button class', () => {
      expect(component.hasClass('k-Button')).toBe(true)
    })

    it('has the hydrogen modifier class', () => {
      expect(component.hasClass('k-Button--hydrogen')).toBe(true)
    })

    it('does not have the iconRight modifier class', () => {
      expect(component.hasClass('k-Button--iconRight')).toBeFalsy()
    })

    it('does not have a tabindex attribute', () => {
      expect(component.props().tabindex).toBeFalsy()
    })
  })

  describe('className prop', () => {
    it('adds the class to the element', () => {
      const component = shallow(<Button className="meaow" />)
      expect(component.hasClass('meaow')).toBe(true)
    })
  })

  describe('modifier prop', () => {
    it('adds a class to the component', () => {
      const component = shallow(<Button modifier="helium" />)
      expect(component.hasClass('k-Button--helium')).toBe(true)
    })
  })

  describe('iconRight prop', () => {
    it('adds the iconRight modifier class', () => {
      const component = shallow(<Button iconOnRight />)
      expect(component.hasClass('k-Button--iconRight')).toBe(true)
    })
  })

  describe('tag prop', () => {
    it('changes the tag', () => {
      const component = shallow(<Button tag="a" />)
      expect(component.type()).toBe('a')
    })
  })

  describe('with tag="a" and no href', () => {
    it('adds a tabindex', () => {
      const component = shallow(<Button tag="a" />)
      expect(component.props().tabIndex).toBe(0)
    })
  })

  describe('with tag="a" href="foo"', () => {
    it('does not add a tabindex', () => {
      const component = shallow(<Button tag="a" href="foo" />)
      expect(component.props().tabIndex).toBeFalsy()
    })
  })
})
