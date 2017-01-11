import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Checkbox from 'kitten/components/form/checkbox'

describe('<Checkbox />', () => {
  const component = shallow(
    <Checkbox id="input-1"
              type="checkbox"
              className="k-Checkbox__input" />
  )

  it('has a <div class="k-Checkbox" />', () => {
    expect(component).to.have.className('k-Checkbox')
  })

  it('renders input', () => {
    const input = component.find('input')

    expect(input).to.have.attr('id', 'input-1')
    expect(input).to.have.attr('type', 'checkbox')
    expect(input).to.have.className('k-Checkbox__input')
  })

  describe('isChecked', () => {
    const component = shallow(
      <Checkbox isChecked="true" />
    )

    it('has a checked', () => {
      const input = component.find('input')
      expect(input).to.have.attr('checked')
    })
  })

  describe('disabled', () => {
    const component = shallow(
      <Checkbox disabled="true" />
    )

    it('has a disabled', () => {
      const input = component.find('input')
      expect(input).to.have.attr('disabled')
    })
  })

})
