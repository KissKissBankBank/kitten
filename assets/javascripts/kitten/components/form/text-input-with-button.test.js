import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import { TextInput } from 'kitten/components/form/text-input'
import { TextInputWithButton } from 'kitten/components/form/text-input-with-button'

describe('<TextInputWithButton />', () => {
  describe('by default', () => {
    const component = shallow(<TextInputWithButton />)

    it('renders a <form />', () => {
      expect(component).to.have.tagName('form')
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
})
