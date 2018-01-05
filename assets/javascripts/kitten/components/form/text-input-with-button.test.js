import React, { Component } from 'react'
import { shallow, mount } from 'enzyme'
import { TextInput } from 'kitten/components/form/text-input'
import { TextInputWithButton }
  from 'kitten/components/form/text-input-with-button'

describe('<TextInputWithButton />', () => {
  describe('by default', () => {
    const component = shallow(<TextInputWithButton />)

    it('renders a <div />', () => {
      expect(component).to.have.tagName('div')
    })

    it('has a "k-TextInputWithButton" class', () => {
      expect(component).to.have.className('k-TextInputWithButton')
    })

    it('renders an input.k-TextInputWithButton__input', () => {
      const textInput = component.find('TextInput')

      expect(textInput).to.have.tagName('input')
      expect(textInput).to.have.className('k-TextInputWithButton__input')
    })

    it('renders a button.k-TextInputWithButton__button', () => {
      const button = component.find('button')

      expect(button).to.have.tagName('button')
      expect(button).to.have.className('k-TextInputWithButton__button')
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

    it('renders textInput with className prop', () => {
      expect(textInput).to.have.className('custom-class')
      expect(textInput).to.have.attr('aria-hidden', 'true')
    })
  })

  describe('valid prop', () => {
    const component = mount(<TextInputWithButton valid />)
    const textInput = component.find('input')
    const button = component.find('button')

    it('has an <input /> with "is-valid" class', () => {
      expect(textInput).to.have.className('is-valid')
    })

    it('has an <button /> with "is-valid" class', () => {
      expect(button).to.have.className('is-valid')
    })
  })

  describe('error prop', () => {
    const component = mount(<TextInputWithButton error />)
    const textInput = component.find('input')
    const button = component.find('button')

    it('has an <input /> with "is-error" class', () => {
      expect(textInput).to.have.className('is-error')
    })

    it('has an <button /> with "is-error" class', () => {
      expect(button).to.have.className('is-error')
    })
  })

  describe('disabled prop', () => {
    const component = mount(<TextInputWithButton disabled />)
    const textInput = component.find('input')
    const button = component.find('button')

    it('has an <input /> with "is-disabled" class', () => {
      expect(textInput).to.have.className('is-disabled')
    })

    it('has an <button /> with "is-disabled" class', () => {
      expect(button).to.have.className('is-disabled')
    })
  })

  describe('value prop', () => {
    const component = mount(<TextInputWithButton value="custom-button" />)
    const button = component.find('.k-TextInputWithButton__button')

    it('renders value', () => {
      expect(button).to.contain.text('custom-button')
    })
  })
})
