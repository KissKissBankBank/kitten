import React, { Component } from 'react'
import { TextInput } from 'kitten/components/form/text-input'
import { TextInputWithButton }
  from 'kitten/components/form/text-input-with-button'

describe('<TextInputWithButton />', () => {
  describe('by default', () => {
    const component = shallow(<TextInputWithButton />)

    it('renders a <div />', () => {
      expect(component.is('div')).toBe(true)
    })

    it('has a "k-TextInputWithButton" class', () => {
      expect(component.hasClass('k-TextInputWithButton')).toBe(true)
    })

    it('renders an input.k-TextInputWithButton__input', () => {
      const textInput = component.find('TextInput')

      expect(textInput.dive().is('input')).toBe(true)
      expect(textInput.dive().hasClass('k-TextInputWithButton__input')).toBe(true)
    })

    it('renders a button.k-TextInputWithButton__button', () => {
      const button = component.find('button')

      expect(button.is('button')).toBe(true)
      expect(button.hasClass('k-TextInputWithButton__button')).toBe(true)
    })
  })

  describe('with prop textInputProps', () => {
    const textInputProps = {
      'aria-hidden': true,
      className: 'custom-class',
      placeholder: 'bar',
    }
    const component = shallow(
      <TextInputWithButton
        textInputProps={ textInputProps }
      />
    )
    const textInput = component.find(TextInput)

    it('renders textInput with className prop', () => {
      expect(textInput.hasClass('custom-class')).toBe(true)
      expect(textInput.props()['aria-hidden']).toBe(true)
      expect(textInput.props().placeholder).toBe('bar')
    })
  })

  describe('valid prop', () => {
    const component = mount(<TextInputWithButton valid />)
    const textInput = component.find('input')
    const button = component.find('button')

    it('has an <input /> with "is-valid" class', () => {
      expect(textInput.hasClass('is-valid')).toBe(true)
    })

    it('has an <button /> with "is-valid" class', () => {
      expect(button.hasClass('is-valid')).toBe(true)
    })
  })

  describe('error prop', () => {
    const component = mount(<TextInputWithButton error />)
    const textInput = component.find('input')
    const button = component.find('button')

    it('has an <input /> with "is-error" class', () => {
      expect(textInput.hasClass('is-error')).toBe(true)
    })

    it('has an <button /> with "is-error" class', () => {
      expect(button.hasClass('is-error')).toBe(true)
    })
  })

  describe('disabled prop', () => {
    const component = mount(<TextInputWithButton disabled />)
    const textInput = component.find('input')
    const button = component.find('button')

    it('has an <input /> with "is-disabled" class', () => {
      expect(textInput.hasClass('is-disabled')).toBe(true)
    })

    it('has an <button /> with "is-disabled" class', () => {
      expect(button.hasClass('is-disabled')).toBe(true)
    })
  })

  describe('value prop', () => {
    const component = mount(<TextInputWithButton value="custom-button" />)
    const button = component.find('.k-TextInputWithButton__button')

    it('renders value', () => {
      expect(button.text()).toBe('custom-button')
    })
  })
})
