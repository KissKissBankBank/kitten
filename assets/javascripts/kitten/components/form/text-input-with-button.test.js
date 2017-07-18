import React, { Component } from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import { TextInput } from 'kitten/components/form/text-input'
import { TextInputWithButton } from 'kitten/components/form/text-input-with-button'

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

    it('renders a input.k-TextInputWithButton__button', () => {
      const input = component.find('input')

      expect(input).to.have.tagName('input')
      expect(input).to.have.className('k-TextInputWithButton__button')
    })
  })

  describe('tiny prop', () => {
    const component = shallow(<TextInputWithButton tiny />)
    const textInput = component.find('input')

    it('has an <input /> with "k-TextInput--tiny" class', () => {
      expect(textInput.hasClass('k-TextInput--tiny'))
    })
  })

  describe('valid prop', () => {
    const component = shallow(<TextInputWithButton valid />)
    const textInput = component.find('input')

    it('has an <input /> with "is-valid" class', () => {
      expect(textInput.hasClass('is-valid'))
    })
  })

  describe('error prop', () => {
    const component = shallow(<TextInputWithButton error />)
    const textInput = component.find('input')

    it('has an <input /> with "is-error" class', () => {
      expect(textInput.hasClass('is-error'))
    })
  })

  describe('value prop', () => {
    const component = mount(<TextInputWithButton value="Button" />)
    const button = component.find('.k-TextInputWithButton__button')

    it('renders value', () => {
      expect(button).to.have.length(1)
    })
  })
})
