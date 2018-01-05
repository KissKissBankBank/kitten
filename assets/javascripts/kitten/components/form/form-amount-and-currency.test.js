import React from 'react'
import { shallow, mount } from 'enzyme'
import { SelectWithState } from 'kitten/components/form/select-with-state'
import { TextInput } from 'kitten/components/form/text-input'
import { FormAmountAndCurrency }
  from 'kitten/components/form/form-amount-and-currency'

describe('<FormAmountAndCurrency />', () => {
  describe('valid prop', () => {
    const component = shallow(<FormAmountAndCurrency valid={ true } />)

    test('passes the right props to the `FormAmountAndCurrency` component', () => {
      expect(component.props()).toEqual(expect.arrayContaining(Object.keys({ valid: true })))
    })
  })

  describe('error prop', () => {
    const component = shallow(<FormAmountAndCurrency error={ true } />)

    test('passes the right props to the `FormAmountAndCurrency` component', () => {
      expect(component.props()).toEqual(expect.arrayContaining(Object.keys({ error: true })))
    })
  })

  describe('tiny prop', () => {
    const component = shallow(<FormAmountAndCurrency tiny={ true } />)

    test('passes the right props to the `FormAmountAndCurrency` component', () => {
      expect(component.props()).toEqual(expect.arrayContaining(Object.keys({ tiny: true })))
    })
  })

  describe('disabled prop', () => {
    const component = shallow(<FormAmountAndCurrency disabled />)

    test('passes the right props to the `FormAmountAndCurrency` component', () => {
      expect(component.props()).toEqual(expect.arrayContaining(Object.keys({ disabled: true })))
    })
  })
})
