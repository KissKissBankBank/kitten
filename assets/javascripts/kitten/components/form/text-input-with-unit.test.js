import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import { TextInputWithUnit } from 'kitten/components/form/text-input-with-unit'

describe('<TextInputWithUnit />', () => {
  describe('by default', () => {
    const component = shallow(<TextInputWithUnit />)
    const textInput = component.find('TextInput')
    const span = component.find('span')

    it('renders a <div />', () => {
      expect(component).to.have.tagName('div')
    })

    it('has "k-TextInputWithUnit" class', () => {
      expect(component).to.have.className('k-TextInputWithUnit')
    })

    describe('children prop', () => {
      describe('1st', () => {
        it('renders an <input /> child', () => {
          expect(textInput).to.have.tagName('input')
        })

        it('has "k-TextInputWithUnit__input" class', () => {
          expect(textInput).to.have.className('k-TextInputWithUnit__input')
        })
      })

      describe('2nd', () => {
        it('renders a <span /> child', () => {
          expect(span).to.have.tagName('span')
        })

        it('has "k-TextInputWithUnit__unit" class', () => {
          expect(span).to.have.className('k-TextInputWithUnit__unit')
        })
      })
    })
  })

  describe('tiny prop', () => {
    const component = mount(<TextInputWithUnit tiny={ true } />)
    const textInput = component.find('TextInput')
    const span = component.find('span')
    const textInputExpectation = textInput.hasClass("k-TextInput--tiny")
    const spanExpectation = span.hasClass("k-TextInputWithUnit__unit--tiny")

    it('has an <input /> with "k-TextInput--tiny" class', () => {
      expect(textInputExpectation).to.equal(true)
    })

    it('has a <span /> with "k-TextInputWithUnit__unit--tiny" class', () => {
      expect(spanExpectation).to.equal(true)
    })
  })

  describe('valid prop', () => {
    const component = mount(<TextInputWithUnit valid={ true } />)
    const textInput = component.find('TextInput')
    const span = component.find('span')
    const textInputExpectation = textInput.hasClass("is-valid")
    const spanExpectation = span.hasClass("is-valid")

    it('has an <input /> with "is-valid" class', () => {
      expect(textInputExpectation).to.equal(true)
    })

    it('has a <span /> with "is-valid" class', () => {
      expect(spanExpectation).to.equal(true)
    })
  })

  describe('error prop', () => {
    const component = mount(<TextInputWithUnit error={ true } />)
    const textInput = component.find('TextInput')
    const span = component.find('span')
    const textInputExpectation = textInput.hasClass("is-error")
    const spanExpectation = span.hasClass("is-error")

    it('has an <input /> with "is-error" class', () => {
      expect(textInputExpectation).to.equal(true)
    })

    it('has a <span /> with "is-error" class', () => {
      expect(spanExpectation).to.equal(true)
    })
  })

  describe('disabled prop', () => {
    const component = mount(<TextInputWithUnit disabled={ true } />)
    const textInput = component.find('TextInput')
    const span = component.find('span')
    const spanExpectation = span.hasClass("is-inactive")

    it('has a disabled <input />', () => {
      expect(textInput).to.have.attr('disabled')
    })

    it('has a <span /> with "is-inactive" class', () => {
      expect(spanExpectation).to.equal(true)
    })
  })
})
