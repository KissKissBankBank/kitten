import React from 'react'
import { shallow, mount } from 'enzyme'
import { TextInputWithUnit } from 'kitten/components/form/text-input-with-unit'

describe('<TextInputWithUnit />', () => {
  describe('by default', () => {
    const component = shallow(<TextInputWithUnit />)

    test('renders a <div />', () => {
      expect(component).to.have.tagName('div')
    })

    test('has a "k-TextInputWithUnit" class', () => {
      expect(component.hasClass('k-TextInputWithUnit')).toBe(true)
    })

    test('has a "k-TextInputWithUnit--fullWidth" class', () => {
      expect(component.hasClass('k-TextInputWithUnit--fullWidth')).toBe(true)
    })

    test('renders an input.k-TextInputWithUnit__input', () => {
      const textInput = component.find('TextInput')

      expect(textInput).to.have.tagName('input')
      expect(textInput.hasClass('k-TextInputWithUnit__input')).toBe(true)
    })

    test('renders a span.k-TextInputWithUnit__unit', () => {
      const span = component.find('span')

      expect(span).to.have.tagName('span')
      expect(span.hasClass('k-TextInputWithUnit__unit')).toBe(true)
    })
  })

  describe('tiny prop', () => {
    const component = mount(<TextInputWithUnit tiny />)
    const textInput = component.find('input')
    const span = component.find('span')
    const textInputExpectation = textInput.hasClass('k-TextInput--tiny')
    const spanExpectation = span.hasClass('k-TextInputWithUnit__unit--tiny')

    test('has an <input /> with "k-TextInput--tiny" class', () => {
      expect(textInputExpectation).toBe(true)
    })

    test('has a <span /> with "k-TextInputWithUnit__unit--tiny" class', () => {
      expect(spanExpectation).toBe(true)
    })
  })

  describe('valid prop', () => {
    const component = mount(<TextInputWithUnit valid />)
    const textInput = component.find('input')
    const span = component.find('span')
    const textInputExpectation = textInput.hasClass('is-valid')
    const spanExpectation = span.hasClass('is-valid')

    test('has an <input /> with "is-valid" class', () => {
      expect(textInputExpectation).toBe(true)
    })

    test('has a <span /> with "is-valid" class', () => {
      expect(spanExpectation).toBe(true)
    })
  })

  describe('error prop', () => {
    const component = mount(<TextInputWithUnit error />)
    const textInput = component.find('input')
    const span = component.find('span')
    const textInputExpectation = textInput.hasClass('is-error')
    const spanExpectation = span.hasClass('is-error')

    test('has an <input /> with "is-error" class', () => {
      expect(textInputExpectation).toBe(true)
    })

    test('has a <span /> with "is-error" class', () => {
      expect(spanExpectation).toBe(true)
    })
  })

  describe('unitWord prop', () => {
    const component = mount(<TextInputWithUnit unitWord />)
    const span = component.find('span')
    const spanExpectation = span.hasClass('k-TextInputWithUnit__unitWord')

    test('has a <span /> with "k-TextInputWithUnit__unitWord" class', () => {
      expect(spanExpectation).toBe(true)
    })
  })

  describe('digits prop', () => {
    const component = mount(<TextInputWithUnit digits={ 2 } />)

    test('does not have "k-TextInputWithUnit--fullWidth" class', () => {
      expect(component).not.to.have.className('k-TextInputWithUnit--fullWidth')
    })

    test('has a <TextInput /> with digits prop', () => {
      expect(component.find('TextInput')).to.have.prop('digits', 2)
    })
  })

  describe('disabled prop', () => {
    const component = mount(<TextInputWithUnit disabled />)
    const textInput = component.find('TextInput')
    const span = component.find('span')
    const spanExpectation = span.hasClass('is-inactive')

    test('has a disabled <input />', () => {
      expect(textInput).to.have.attr('disabled')
    })

    test('has a <span /> with "is-inactive" class', () => {
      expect(spanExpectation).toBe(true)
    })
  })
})
