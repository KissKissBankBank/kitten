import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import SelectWithState from 'kitten/components/form/select-with-state'
import { TextInput } from 'kitten/components/form/text-input'
import FormAmountAndCurrency from 'kitten/components/form/form-amount-and-currency'

describe('<FormAmountAndCurrency />', () => {
  describe('valid props', () => {
    const component = mount(<FormAmountAndCurrency valid={ true } />)
    const textInput = component.find('input')
    const select = component.find('.Select')
    const textInputExpectation = textInput.hasClass("is-valid")
    const selectExpectation = select.hasClass("is-valid")

    it('render an input.is-valid', () => {
      expect(textInputExpectation).to.equal(true)
    })
  })

  describe('error props', () => {
    const component = mount(<FormAmountAndCurrency error={ true } />)
    const textInput = component.find('input')
    const textInputExpectation = textInput.hasClass("is-error")

    it('render an input.is-error', () => {
      expect(textInputExpectation).to.equal(true)
    })
  })

  describe('tiny props', () => {
    const component = mount(<FormAmountAndCurrency tiny={ true } />)
    const textInput = component.find('input')
    const select = component.find('.k-Select')
    const textInputExpectation = textInput.hasClass("k-TextInput--tiny")
    const selectExpectation = select.hasClass("k-Select--tiny")

    it('render an input.k-TextInput--tiny', () => {
      expect(textInputExpectation).to.equal(true)
    })

    it('render a .k-Select.k-Select--tiny', () => {
      expect(selectExpectation).to.equal(true)
    })
  })

  describe('disabled props', () => {
    const component = mount(<FormAmountAndCurrency disabled={ true } />)
    const textInput = component.find('input')

    const expectedProps = {
      disabled: true,
    }

    it('render a disabled <input />', () => {
      expect(textInput).to.have.attr('disabled')
    })

    it('render a .Select.is-inactive', () => {
      expect(component.props()).to.contain.all.keys(expectedProps)
    })
  })
})
