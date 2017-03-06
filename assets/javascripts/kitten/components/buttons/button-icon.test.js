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

  describe('className prop', () => {
    const component = shallow(<ButtonIcon className="k-ButtonIcon--helium" />)

    it('has className', () => {
      expect(component).to.have.className('k-ButtonIcon--helium')
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
