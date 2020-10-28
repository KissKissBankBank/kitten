import React from 'react'
import { ButtonIcon } from '../../../components/buttons/button-icon'

describe('<ButtonIcon />', () => {
  describe('by default', () => {
    const component = shallow(<ButtonIcon />)

    it('it a <ButtonIcon />', () => {
      expect(component.find('button')).toHaveLength(1)
      expect(component.hasClass('k-ButtonIcon')).toBe(true)
      expect(component.props.tabindex).toBe(void 0)
    })
  })

  describe('modifier prop', () => {
    const component = shallow(<ButtonIcon modifier="helium" />)

    it('has className', () => {
      expect(component.hasClass('k-ButtonIcon--helium')).toBe(true)
    })
  })

  describe('className prop', () => {
    const component = shallow(<ButtonIcon className="customClass" />)

    it('has customClass', () => {
      expect(component.hasClass('customClass')).toBe(true)
    })
  })

  describe('size prop', () => {
    const component = shallow(<ButtonIcon size="tiny" />)

    it('has size', () => {
      expect(component.hasClass('k-ButtonIcon--tiny')).toBe(true)
    })
  })

  describe('tag prop', () => {
    const component = shallow(<ButtonIcon tag="a" />)

    it('changes the tag', () => {
      expect(component.find('a')).toHaveLength(1)
    })
  })

  describe('rounded prop', () => {
    const component = shallow(<ButtonIcon rounded />)

    it('has rounded', () => {
      expect(component.hasClass('k-ButtonIcon--rounded')).toBe(true)
    })
  })

  describe('with tag="a" and no href', () => {
    const component = shallow(<ButtonIcon tag="a" />)

    it('adds a tabindex', () => {
      expect(component.props().tabIndex).toBe(0)
    })
  })

  describe('with tag="a" href="foo"', () => {
    const component = shallow(<ButtonIcon tag="a" href="foo" />)

    it('does not add a tabindex', () => {
      expect(component.props().tabIndex).toBeFalsy()
    })
  })

  describe('children prop', () => {
    const component = shallow(
      <ButtonIcon>
        <svg />
      </ButtonIcon>,
    )

    it('has children', () => {
      expect(component.find('svg')).toHaveLength(1)
    })
  })
})
