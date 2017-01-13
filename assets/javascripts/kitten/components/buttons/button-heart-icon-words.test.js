import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { Button } from 'kitten/components/buttons/button'
import { ButtonHeartIconWords } from 'kitten/components/buttons/button-heart-icon-words'

describe('ButtonHeartIconWords with default props', () => {
  const defaultComponent = shallow(
    <ButtonHeartIconWords />)

  it('has a default button-heart-icon-words attributes', () => {
    expect(defaultComponent).type(Button)
    expect(defaultComponent.find('k-Button--icon')).to.have.length(0)
  })

  it('has a default svg icon', () => {
    expect(defaultComponent.find('k-Button__icon')).to.have.length(0)
  })

  it('has a default children', () => {
    expect(defaultComponent.find('<HeartIcon />')).to.have.length(0)
  })

  describe('<ButtonHeartIconWords />', () => {
    const component = shallow(<ButtonHeartIconWords />)

    it('renders a <Button />', () => {
      expect(component).to.have.type(Button)
      expect(component).to.have.className('k-Button--icon')
    })

    it('renders an svg icon', () => {
      expect(component.find('.k-Button__icon')).to.have.length(1)
    })

    it('has a children', () => {
      expect(component.find('HeartIcon')).to.have.length(1)
    })
  })
})
