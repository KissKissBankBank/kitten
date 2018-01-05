import React from 'react'

import { TextInput } from 'kitten/components/form/text-input'

describe('Text-input with default props', () => {
  const defaultComponent = shallow(
    <TextInput />)

  test('has a default text-input attributes', () => {
    expect(defaultComponent.find('.k-TextInput')).toHaveLength(1)
  })

  test('has a default tag', () => {
    expect(defaultComponent).to.have.tagName('input')
  })

  test('does not contain a is-valid element', () => {
    expect(defaultComponent.find('.is-valid')).toHaveLength(0)
  })

  test('does not contain a is-error element', () => {
    expect(defaultComponent.find('.is-error')).toHaveLength(0)
  })

  test('does not contain a tiny element', () => {
    expect(defaultComponent.find('.k-TextInput--tiny')).toHaveLength(0)
  })

  describe('<TextInput />', () => {
    const component = shallow(
      <TextInput className="k-TextInput--custom" />)

    test('renders a <TextInput class="k-TextInput" />', () => {
      expect(component).to.have.tagName('input')
      expect(component.hasClass('k-TextInput--custom')).toBe(true)
    })

    describe('text-input with valid class', () => {
      const componentWithValidClass = shallow(
        <TextInput valid={ true } />
      )

      test('has a valid class', () => {
        expect(componentWithValidClass.hasClass('is-valid')).toBe(true)
      })
    })

    describe('text-input with error class', () => {
      const componentWithErrorClass = shallow(
        <TextInput error={ true } />
      )

      test('has a error class', () => {
        expect(componentWithErrorClass.hasClass('is-error')).toBe(true)
      })
    })

    describe('text-input with tiny class', () => {
      const componentWithTinyClass = shallow(
        <TextInput tiny={ true } />
      )

      test('has a tiny class', () => {
        expect(componentWithTinyClass.hasClass('k-TextInput--tiny')).toBe(true)
      })
    })

    describe('text-input with textarea tag', () => {
      const textArea = shallow(
        <TextInput tag='textarea' rows='7' />
      ).find('textarea')

      test('has a textarea tag', () => {
        expect(textArea).to.have.tagName('textarea')
      })

      test('has 7 rows', () => {
        expect(textArea).to.have.attr('rows', '7')
      })
    })
  })
})
