import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import SelectWithState from 'kitten/components/form/select-with-state'
import { TextInput } from 'kitten/components/form/text-input'
import { FormAmountAndCurrency } from 'kitten/components/form/form-amount-and-currency'

describe('<FormAmountAndCurrency />', () => {
  describe('valid prop', () => {
    const component = mount(<FormAmountAndCurrency valid={ true } />)
    const textInput = component.find('input')
    const textInputExpectation = textInput.hasClass('is-valid')

    it('renders an input.is-valid', () => {
      expect(textInputExpectation).to.equal(true)
    })
  })

  describe('error prop', () => {
    const component = mount(<FormAmountAndCurrency error={ true } />)
    const textInput = component.find('input')
    const textInputExpectation = textInput.hasClass('is-error')

    it('renders an input.is-error', () => {
      expect(textInputExpectation).to.equal(true)
    })
  })

  describe('tiny prop', () => {
    const component = mount(<FormAmountAndCurrency tiny={ true } />)
    const textInput = component.find('input')
    const select = component.find('.k-Select')
    const textInputExpectation = textInput.hasClass('k-TextInput--tiny')
    const selectExpectation = select.hasClass('k-Select--tiny')

    it('renders an input.k-TextInput--tiny', () => {
      expect(textInputExpectation).to.equal(true)
    })

    it('renders a .k-Select.k-Select--tiny', () => {
      expect(selectExpectation).to.equal(true)
    })
  })

  describe('disabled prop', () => {
    const component = shallow(<FormAmountAndCurrency disabled={ true } />)
    const textInput = component.find('TextInput')
    const select = component.find('SelectWithState')

    it('passes the right props to the `TextInput` component', () => {
      expect(textInput.props()).to.contains.all.keys({ disabled: true })
    })

    it('passes the right props to the `SelectWithState` component', () => {
      expect(select.props()).to.contains.all.keys({ disabled: true })
    })
  })
})
