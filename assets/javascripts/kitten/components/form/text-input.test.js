import React from 'react'
import { shallow } from 'enzyme'
import { TextInput } from 'kitten/components/form/text-input'

describe('Text-input with default props', () => {
  const defaultComponent = shallow(
    <TextInput />)

  it('has a default text-input attributes', () => {
    expect(defaultComponent.find('.k-TextInput')).toHaveLength(1)
  })

  it('has a default tag', () => {
    expect(defaultComponent).to.have.tagName('input')
  })

  it('does not contain a is-valid element', () => {
    expect(defaultComponent.find('.is-valid')).toHaveLength(0)
  })

  it('does not contain a is-error element', () => {
    expect(defaultComponent.find('.is-error')).toHaveLength(0)
  })

  it('does not contain a tiny element', () => {
    expect(defaultComponent.find('.k-TextInput--tiny')).toHaveLength(0)
  })

  describe('<TextInput />', () => {
    const component = shallow(
      <TextInput className="k-TextInput--custom" />)

    it('renders a <TextInput class="k-TextInput" />', () => {
      expect(component).to.have.tagName('input')
      expect(component).to.have.className('k-TextInput--custom')
    })

    describe('text-input with valid class', () => {
      const componentWithValidClass = shallow(
        <TextInput valid={ true } />
      )

      it('has a valid class', () => {
        expect(componentWithValidClass).to.have.className('is-valid')
      })
    })

    describe('text-input with error class', () => {
      const componentWithErrorClass = shallow(
        <TextInput error={ true } />
      )

      it('has a error class', () => {
        expect(componentWithErrorClass).to.have.className('is-error')
      })
    })

    describe('text-input with tiny class', () => {
      const componentWithTinyClass = shallow(
        <TextInput tiny={ true } />
      )

      it('has a tiny class', () => {
        expect(componentWithTinyClass).to.have.className('k-TextInput--tiny')
      })
    })

    describe('text-input with textarea tag', () => {
      const textArea = shallow(
        <TextInput tag='textarea' rows='7' />
      ).find('textarea')

      it('has a textarea tag', () => {
        expect(textArea).to.have.tagName('textarea')
      })

      it('has 7 rows', () => {
        expect(textArea).to.have.attr('rows', '7')
      })
    })
  })
})
