import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { ButtonIcon } from 'kitten/components/buttons/button-icon'

describe('<ButtonIcon />', () => {
  describe('by default', () => {
    const component = shallow(<ButtonIcon />)

    it('it a <ButtonIcon />', () => {
      expect(component).to.have.tagName('button')
      expect(component).to.have.className('k-ButtonIcon')
      expect(component).not.to.have.attr('tabindex')
    })
  })

  describe('modifier prop', () => {
    const component = shallow(<ButtonIcon modifier="helium" />)

    it('has className', () => {
      expect(component).to.have.className('k-ButtonIcon--helium')
    })
  })

  describe('className prop', () => {
    const component = shallow(<ButtonIcon className="customClass" />)

    it('has customClass', () => {
      expect(component).to.have.className('customClass')
    })
  })

  describe('size prop', () => {
    const component = shallow(<ButtonIcon size="tiny" />)

    it('has size', () => {
      expect(component).to.have.className('k-ButtonIcon--tiny')
    })
  })

  describe('tag prop', () => {
    const component = shallow(<ButtonIcon tag="a" />)

    it('changes the tag', () => {
      expect(component).to.have.tagName('a')
    })
  })

  describe('rounded prop', () => {
    const component = shallow(<ButtonIcon rounded />)

    it('has rounded', () => {
      expect(component).to.have.className('k-ButtonIcon--rounded')
    })
  })

  describe('with tag="a" and no href', () => {
    const component = shallow(<ButtonIcon tag="a" />)

    it('adds a tabindex', () => {
      expect(component).to.have.attr('tabindex', '0')
    })
  })

  describe('with tag="a" href="foo"', () => {
    const component = shallow(<ButtonIcon tag="a" href="foo" />)

    it('does not add a tabindex', () => {
      expect(component).not.to.have.attr('tabindex')
    })
  })

  describe('children prop', () => {
    const component = shallow(
      <ButtonIcon>
        <svg />
      </ButtonIcon>
    )

    it('has children', () => {
      expect(component.children()).to.have.tagName('svg')
    })
  })
})
