import React, { Component } from 'react'
import { shallow, mount } from 'enzyme'
import { TextInput } from 'kitten/components/form/text-input'
import { TextInputWithButton }
  from 'kitten/components/form/text-input-with-button'

describe('<TextInputWithButton />', () => {
  describe('by default', () => {
    const component = shallow(<TextInputWithButton />)

    test('renders a <div />', () => {
      expect(component).to.have.tagName('div')
    })

    test('has a "k-TextInputWithButton" class', () => {
      expect(component.hasClass('k-TextInputWithButton')).toBe(true)
    })

    test('renders an input.k-TextInputWithButton__input', () => {
      const textInput = component.find('TextInput')

      expect(textInput).to.have.tagName('input')
      expect(textInput.hasClass('k-TextInputWithButton__input')).toBe(true)
    })

    test('renders a button.k-TextInputWithButton__button', () => {
      const button = component.find('button')

      expect(button).to.have.tagName('button')
      expect(button.hasClass('k-TextInputWithButton__button')).toBe(true)
    })
  })

  describe('with prop textInputProps', () => {
    const textInputProps = {
      'aria-hidden': true,
      className: 'custom-class',
    }
    const component = mount(
      <TextInputWithButton
        textInputProps={ textInputProps }
      />
    )
    const textInput = component.find('input')

    test('renders textInput with className prop', () => {
      expect(textInput.hasClass('custom-class')).toBe(true)
      expect(textInput).to.have.attr('aria-hidden', 'true')
    })
  })

  describe('valid prop', () => {
    const component = mount(<TextInputWithButton valid />)
    const textInput = component.find('input')
    const button = component.find('button')

    test('has an <input /> with "is-valid" class', () => {
      expect(textInput.hasClass('is-valid')).toBe(true)
    })

    test('has an <button /> with "is-valid" class', () => {
      expect(button.hasClass('is-valid')).toBe(true)
    })
  })

  describe('error prop', () => {
    const component = mount(<TextInputWithButton error />)
    const textInput = component.find('input')
    const button = component.find('button')

    test('has an <input /> with "is-error" class', () => {
      expect(textInput.hasClass('is-error')).toBe(true)
    })

    test('has an <button /> with "is-error" class', () => {
      expect(button.hasClass('is-error')).toBe(true)
    })
  })

  describe('disabled prop', () => {
    const component = mount(<TextInputWithButton disabled />)
    const textInput = component.find('input')
    const button = component.find('button')

    test('has an <input /> with "is-disabled" class', () => {
      expect(textInput.hasClass('is-disabled')).toBe(true)
    })

    test('has an <button /> with "is-disabled" class', () => {
      expect(button.hasClass('is-disabled')).toBe(true)
    })
  })

  describe('value prop', () => {
    const component = mount(<TextInputWithButton value="custom-button" />)
    const button = component.find('.k-TextInputWithButton__button')

    test('renders value', () => {
      expect(button).to.contain.text('custom-button')
    })
  })
})
