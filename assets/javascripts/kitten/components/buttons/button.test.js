import React from 'react'

import { Button } from 'kitten/components/buttons/button'

describe('Button with default props', () => {
  const component = shallow(<Button />)

  describe('by default', () => {
    test('is a <button>', () => {
      expect(component).to.have.tagName('button')
    })

    test('has a k-Button class', () => {
      expect(component.hasClass('k-Button')).toBe(true)
    })

    test('has the hydrogen modifier class', () => {
      expect(component.hasClass('k-Button--hydrogen')).toBe(true)
    })

    test('does not have the iconRight modifier class', () => {
      expect(component).not.to.have.className('k-Button--iconRight')
    })

    test('does not have a tabindex attribute', () => {
      expect(component).not.to.have.attr('tabindex')
    })
  })

  describe('className prop', () => {
    test('adds the class to the element', () => {
      const component = shallow(<Button className="meaow" />)
      expect(component.hasClass('meaow')).toBe(true)
    })
  })

  describe('modifier prop', () => {
    test('adds a class to the component', () => {
      const component = shallow(<Button modifier="helium" />)
      expect(component.hasClass('k-Button--helium')).toBe(true)
    })
  })

  describe('iconRight prop', () => {
    test('adds the iconRight modifier class', () => {
      const component = shallow(<Button iconOnRight />)
      expect(component.hasClass('k-Button--iconRight')).toBe(true)
    })
  })

  describe('tag prop', () => {
    test('changes the tag', () => {
      const component = shallow(<Button tag="a" />)
      expect(component).to.have.tagName('a')
    })
  })

  describe('with tag="a" and no href', () => {
    test('adds a tabindex', () => {
      const component = shallow(<Button tag="a" />)
      expect(component).to.have.attr('tabindex', '0')
    })
  })

  describe('with tag="a" href="foo"', () => {
    test('does not add a tabindex', () => {
      const component = shallow(<Button tag="a" href="foo" />)
      expect(component).not.to.have.attr('tabindex')
    })
  })
})
