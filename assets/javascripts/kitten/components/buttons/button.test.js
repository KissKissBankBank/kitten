import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { Button } from 'kitten/components/buttons/button'

describe('Button with default props', () => {
  const component = shallow(<Button />)

  describe('by default', () => {
    it('is a <button>', () => {
      expect(component).to.have.tagName('button')
    })

    it('has a k-Button class', () => {
      expect(component).to.have.className('k-Button')
    })

    it('has the hydrogen modifier class', () => {
      expect(component).to.have.className('k-Button--hydrogen')
    })

    it('does not have the iconRight modifier class', () => {
      expect(component).not.to.have.className('k-Button--iconRight')
    })
  })

  describe('className prop', () => {
    it('adds the class to the element', () => {
      const component = shallow(<Button className="meaow" />)
      expect(component).to.have.className('meaow')
    })
  })

  describe('modifier prop', () => {
    it('adds a class to the component', () => {
      const component = shallow(<Button modifier="helium" />)
      expect(component).to.have.className('k-Button--helium')
    })
  })

  describe('iconRight prop', () => {
    it('adds the iconRight modifier class', () => {
      const componentWithIconRight = shallow(<Button iconOnRight />)
      expect(componentWithIconRight).to.have.className('k-Button--iconRight')
    })
  })
})
