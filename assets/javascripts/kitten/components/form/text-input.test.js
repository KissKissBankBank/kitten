import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { TextInput } from 'kitten/components/form/text-input'

describe('Text-input with default props', () => {
  const defaultComponent = shallow(
  <TextInput />)

  it('has a default text-input attributes', () => {
    expect(defaultComponent.find('.k-TextInput')).to.have.length(1)
  })

  it('has a default tag', () => {
    expect(defaultComponent).to.have.tagName('input')
  })

  it('has a valid class', () => {
    expect(defaultComponent.find('.is-valid')).to.have.length(0)
  })

  it('has a error class', () => {
    expect(defaultComponent.find('.is-error')).to.have.length(0)
  })

  it('has a small class', () => {
    expect(defaultComponent.find('.k-TextInput--tiny')).to.have.length(0)
  })

  describe('<TextInput />', () => {
    const component = shallow(
      <TextInput className="k-TextInput--custom" />)

    it('renders a <TextInput class="k-TextInput" />', () => {
      expect(component).to.have.tagName('input')
      expect(component).to.have.className('k-TextInput--custom')
    })

    describe('button with valid class', () => {
      const componentWithValidClass = shallow(
        <TextInput valid={ true } />
      )

      it('has a valid', () => {
        expect(componentWithValidClass).to.have.className('is-valid')
      })
    })

    describe('button with error class', () => {
      const componentWithErrorClass = shallow(
        <TextInput error={ true } />
      )

      it('has a error', () => {
        expect(componentWithErrorClass).to.have.className('is-error')
      })
    })

    describe('button with small class', () => {
      const componentWithSmallClass = shallow(
        <TextInput small={ true } />
      )

      it('has a small', () => {
        expect(componentWithSmallClass).to.have.className('k-TextInput--tiny')
      })
    })
  })
})
