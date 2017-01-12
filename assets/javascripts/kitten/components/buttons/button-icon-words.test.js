import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { Button } from 'kitten/components/buttons/button'
import { ButtonHeartIconWords } from 'kitten/components/buttons/button-icon-words'

describe('<ButtonHeartIconWords />', () => {
  const component = shallow(<ButtonHeartIconWords />)

  it('renders a <Button />', () => {
    expect(component).to.have.type(Button)
    expect(component).to.have.className('k-Button--icon')
  })

  it('renders an svg icon', () => {
    expect(component.find('.k-Button__icon')).to.have.length(1)
  })
})
