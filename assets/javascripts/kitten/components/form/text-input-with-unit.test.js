import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import { TextInputWithUnit } from 'kitten/components/form/text-input-with-unit'

describe('<TextInputWithUnit />', () => {
  let component = shallow(<TextInputWithUnit />)
  let textInput = component.find('TextInput')
  let span = component.find('span')

  describe('by default', () => {
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
    component = mount(<TextInputWithUnit tiny={ true } />)
    textInput = component.find('TextInput')
    span = component.find('span')
    let textInputExpectation = textInput.hasClass("k-TextInput--tiny")
    let spanExpectation = span.hasClass("k-TextInputWithUnit__unit--tiny")

    it('has an <input /> with "k-TextInput--tiny" class', () => {
      expect(textInputExpectation).to.equal(true)
    })

    it('has a <span /> with "k-TextInputWithUnit__unit--tiny" class', () => {
      expect(spanExpectation).to.equal(true)
    })
  })

  describe('valid prop', () => {
    component = mount(<TextInputWithUnit valid={ true } />)
    textInput = component.find('TextInput')
    span = component.find('span')
    let textInputExpectation = textInput.hasClass("is-valid")
    let spanExpectation = span.hasClass("is-valid")

    it('has an <input /> with "is-valid" class', () => {
      expect(textInputExpectation).to.equal(true)
    })

    it('has a <span /> with "is-valid" class', () => {
      expect(spanExpectation).to.equal(true)
    })
  })

  describe('error prop', () => {
    component = mount(<TextInputWithUnit error={ true } />)
    textInput = component.find('TextInput')
    span = component.find('span')
    let textInputExpectation = textInput.hasClass("is-error")
    let spanExpectation = span.hasClass("is-error")

    it('has an <input /> with "is-error" class', () => {
      expect(textInputExpectation).to.equal(true)
    })

    it('has a <span /> with "is-error" class', () => {
      expect(spanExpectation).to.equal(true)
    })
  })

  describe('disabled prop', () => {
    component = mount(<TextInputWithUnit disabled={ true } />)
    textInput = component.find('TextInput')
    span = component.find('span')
    let spanExpectation = span.hasClass("is-inactive")

    it('has a disabled <input />', () => {
      expect(textInput).to.have.attr('disabled')
    })

    it('has a <span /> with "is-inactive" class', () => {
      expect(spanExpectation).to.equal(true)
    })
  })
})
