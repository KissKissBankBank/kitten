import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import { SelectWithState } from 'kitten/components/form/select-with-state'
import { TextInput } from 'kitten/components/form/text-input'
import { FormAmountAndCurrency }
  from 'kitten/components/form/form-amount-and-currency'

describe('<FormAmountAndCurrency />', () => {
  describe('valid prop', () => {
    const component = shallow(<FormAmountAndCurrency valid={ true } />)

    it('passes the right props to the `FormAmountAndCurrency` component', () => {
      expect(component.props()).to.contains.all.keys({ valid: true })
    })
  })

  describe('error prop', () => {
    const component = shallow(<FormAmountAndCurrency error={ true } />)

    it('passes the right props to the `FormAmountAndCurrency` component', () => {
      expect(component.props()).to.contains.all.keys({ error: true })
    })
  })

  describe('tiny prop', () => {
    const component = shallow(<FormAmountAndCurrency tiny={ true } />)

    it('passes the right props to the `FormAmountAndCurrency` component', () => {
      expect(component.props()).to.contains.all.keys({ tiny: true })
    })
  })

  describe('disabled prop', () => {
    const component = shallow(<FormAmountAndCurrency disabled />)

    it('passes the right props to the `FormAmountAndCurrency` component', () => {
      expect(component.props()).to.contains.all.keys({ disabled: true })
    })
  })
})
