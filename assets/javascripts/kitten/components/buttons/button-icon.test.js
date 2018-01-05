import React from 'react'

import { ButtonIcon } from 'kitten/components/buttons/button-icon'

describe('<ButtonIcon />', () => {
  describe('by default', () => {
    const component = shallow(<ButtonIcon />)

    test('it a <ButtonIcon />', () => {
      expect(component).to.have.tagName('button')
      expect(component.hasClass('k-ButtonIcon')).to.equal(true)
      expect(component).not.to.have.attr('tabindex')
    })
  })

  describe('modifier prop', () => {
    const component = shallow(<ButtonIcon modifier="helium" />)

    test('has className', () => {
      expect(component.hasClass('k-ButtonIcon--helium')).to.equal(true)
    })
  })

  describe('className prop', () => {
    const component = shallow(<ButtonIcon className="customClass" />)

    test('has customClass', () => {
      expect(component.hasClass('customClass')).to.equal(true)
    })
  })

  describe('size prop', () => {
    const component = shallow(<ButtonIcon size="tiny" />)

    test('has size', () => {
      expect(component.hasClass('k-ButtonIcon--tiny')).to.equal(true)
    })
  })

  describe('tag prop', () => {
    const component = shallow(<ButtonIcon tag="a" />)

    test('changes the tag', () => {
      expect(component).to.have.tagName('a')
    })
  })

  describe('with tag="a" and no href', () => {
    const component = shallow(<ButtonIcon tag="a" />)

    test('adds a tabindex', () => {
      expect(component).to.have.attr('tabindex', '0')
    })
  })

  describe('with tag="a" href="foo"', () => {
    const component = shallow(<ButtonIcon tag="a" href="foo" />)

    test('does not add a tabindex', () => {
      expect(component).not.to.have.attr('tabindex')
    })
  })

  describe('children prop', () => {
    const component = shallow(
      <ButtonIcon>
        <svg />
      </ButtonIcon>
    )

    test('has children', () => {
      expect(component.children()).to.have.tagName('svg')
    })
  })
})
