import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Button from 'kitten/components/buttons/button'
import ButtonIconWords from 'kitten/components/buttons/button-icon-words'

describe('<ButtonIconWords />', () => {
  const component = shallow(<ButtonIconWords />)

  it('renders a <Button />', () => {
    expect(component).to.have.type(Button)
  })

  it('renders an svg icon', () => {
    expect(component).to.have.className('k-Button--icon')
    expect(component.find('.k-Button__icon')).to.have.length(1)
  })
})
