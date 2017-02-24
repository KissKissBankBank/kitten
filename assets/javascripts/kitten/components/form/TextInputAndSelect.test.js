import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import { TextInputAndSelect } from 'kitten/components/form/text-input-and-select'

describe('<TextInputAndSelect />', () => {
  describe('By default', () => {
    const component = mount(<TextInputAndSelect />)
    const input = component.find('TextInput')
    const select = component.find('SelectWithState')

    it('renders an input.k-TextInput', () => {
      expect(input).to.tagName('input')
      expect(input.hasClass('k-TextInput')).to.equal(true)
    })

    it('renders a div.k-Select', () => {
      expect(select).to.have.tagName('div')
      expect(select.hasClass('k-Select')).to.equal(true)
    })
  })

  describe('tiny prop', () => {
    const component = mount(<TextInputAndSelect tiny={ true } />)
    const input = component.find('TextInput')
    const select = component.find('SelectWithState')

    it('passes the right props to the `TextInput` component', () => {
      expect(input.props()).to.contains.all.keys({ tiny: true })
    })

    it('passes the right props to the `SelectWithState` component', () => {
      expect(select.props()).to.contains.all.keys({ tiny: true })
    })
  })

  describe('disabled prop', () => {
    const component = mount(<TextInputAndSelect disabled />)
    const input = component.find('TextInput')
    const select = component.find('SelectWithState')

    it('passes the right props to the `TextInput` component', () => {
      expect(input.props()).to.contains.all.keys({ disabled: true })
    })

    it('passes the right props to the `SelectWithState` component', () => {
      expect(select.props()).to.contains.all.keys({ disabled: true })
    })
  })

  describe('digits prop', () => {
    const component = mount(<TextInputAndSelect digits="12" />)
    const input = component.find('TextInput')

    it('passes the right props to the `SelectWithState` component', () => {
      expect(input.props()).to.contains.all.keys({ digits: 12 })
    })

    it('renders input.k-TextInput--twelveDigits', () => {
      expect(input.hasClass('k-TextInput--twelveDigits')).to.equal(true)
    })
  })
})
