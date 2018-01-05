import React from 'react'
import { shallow, mount } from 'enzyme'
import { TextInputAndSelect } from 'kitten/components/form/text-input-and-select'

describe('<TextInputAndSelect />', () => {
  describe('By default', () => {
    const component = mount(<TextInputAndSelect />)
    const input = component.find('TextInput')
    const select = component.find('SelectWithState')

    test('renders an input.k-TextInput', () => {
      expect(input).to.tagName('input')
      expect(input.hasClass('k-TextInput')).toBe(true)
    })

    test('renders a div.k-Select', () => {
      expect(select).to.have.tagName('div')
      expect(select.hasClass('k-Select')).toBe(true)
    })
  })

  describe('tiny prop', () => {
    const component = mount(<TextInputAndSelect tiny={ true } />)
    const input = component.find('TextInput')
    const select = component.find('SelectWithState')

    test('passes the right props to the `TextInput` component', () => {
      expect(input.props()).toEqual(expect.arrayContaining(Object.keys({ tiny: true })))
    })

    test('passes the right props to the `SelectWithState` component', () => {
      expect(select.props()).toEqual(expect.arrayContaining(Object.keys({ tiny: true })))
    })
  })

  describe('disabled prop', () => {
    const component = mount(<TextInputAndSelect disabled />)
    const input = component.find('TextInput')
    const select = component.find('SelectWithState')

    test('passes the right props to the `TextInput` component', () => {
      expect(input.props()).toEqual(expect.arrayContaining(Object.keys({ disabled: true })))
    })

    test('passes the right props to the `SelectWithState` component', () => {
      expect(select.props()).toEqual(expect.arrayContaining(Object.keys({ disabled: true })))
    })
  })

  describe('digits prop', () => {
    const component = mount(<TextInputAndSelect digits="12" />)
    const input = component.find('TextInput')

    test('passes the right props to the `SelectWithState` component', () => {
      expect(input.props()).toEqual(expect.arrayContaining(Object.keys({ digits: 12 })))
    })

    test('renders input.k-TextInput--twelveDigits', () => {
      expect(input.hasClass('k-TextInput--twelveDigits')).toBe(true)
    })
  })
})
