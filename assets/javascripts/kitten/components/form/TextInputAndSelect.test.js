import React from 'react'
import { shallow, mount } from 'enzyme'
import { TextInputAndSelect } from 'kitten/components/form/text-input-and-select'

describe('<TextInputAndSelect />', () => {
  describe('By default', () => {
    const component = mount(<TextInputAndSelect />)
    const input = component.find('TextInput')
    const select = component.find('SelectWithState')

    it('renders an input.k-TextInput', () => {
      expect(input.render().is('input')).toBe(true)
      expect(input.render().hasClass('k-TextInput')).toBe(true)
    })

    it('renders a div.k-Select', () => {
      expect(select.render().is('div')).toBe(true)
      expect(select.render().hasClass('k-Select')).toBe(true)
    })
  })

  describe('tiny prop', () => {
    const component = mount(<TextInputAndSelect tiny={ true } />)
    const input = component.find('TextInput')
    const select = component.find('SelectWithState')

    it('passes the right props to the `TextInput` component', () => {
      expect(input.props()).toMatchObject({ tiny: true })
    })

    it('passes the right props to the `SelectWithState` component', () => {
      expect(select.props()).toMatchObject({ tiny: true })
    })
  })

  describe('disabled prop', () => {
    const component = mount(<TextInputAndSelect disabled />)
    const input = component.find('TextInput')
    const select = component.find('SelectWithState')

    it('passes the right props to the `TextInput` component', () => {
      expect(input.props()).toMatchObject({ disabled: true })
    })

    it('passes the right props to the `SelectWithState` component', () => {
      expect(select.props()).toMatchObject({ disabled: true })
    })
  })

  describe('digits prop', () => {
    const component = mount(<TextInputAndSelect digits="12" />)
    const input = component.find('TextInput')

    it('passes the right props to the `SelectWithState` component', () => {
      expect(input.props()).toMatchObject({ digits: "12" })
    })

    it('renders input.k-TextInput--twelveDigits', () => {
      expect(input.render().hasClass('k-TextInput--twelveDigits')).toBe(true)
    })
  })
})
