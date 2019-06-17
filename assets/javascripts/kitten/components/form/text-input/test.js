import React from 'react'
import { TextInput } from '../../../components/form/text-input'

describe('Text-input with default props', () => {
  const defaultComponent = shallow(<TextInput />)

  it('has a default text-input attributes', () => {
    expect(defaultComponent.find('.k-TextInput')).toHaveLength(1)
  })

  it('has a default tag', () => {
    expect(defaultComponent.is('input')).toBe(true)
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
    const component = shallow(<TextInput className="k-TextInput--custom" />)

    it('renders a <TextInput class="k-TextInput" />', () => {
      expect(component.is('input')).toBe(true)
      expect(component.hasClass('k-TextInput--custom')).toBe(true)
    })

    describe('text-input with valid class', () => {
      const componentWithValidClass = shallow(<TextInput valid={true} />)

      it('has a valid class', () => {
        expect(componentWithValidClass.hasClass('is-valid')).toBe(true)
      })
    })

    describe('text-input with error class', () => {
      const componentWithErrorClass = shallow(<TextInput error={true} />)

      it('has a error class', () => {
        expect(componentWithErrorClass.hasClass('is-error')).toBe(true)
      })
    })

    describe('text-input with tiny class', () => {
      const componentWithTinyClass = shallow(<TextInput tiny={true} />)

      it('has a tiny class', () => {
        expect(componentWithTinyClass.hasClass('k-TextInput--tiny')).toBe(true)
      })
    })

    describe('text-input with name prop', () => {
      const componentWithTinyClass = shallow(<TextInput name="foobar" />)

      it('has a name prop', () => {
        expect(componentWithTinyClass.props().name).toBe('foobar')
      })
    })

    describe('text-input with textarea tag', () => {
      const textArea = shallow(
        <TextInput tag="textarea" rows="7" name="foobar" />,
      ).find('textarea')

      it('has a textarea tag', () => {
        expect(textArea.is('textarea')).toBe(true)
      })

      it('has 7 rows', () => {
        expect(textArea.props().rows).toBe('7')
      })

      it('has a name prop', () => {
        expect(textArea.props().name).toBe('foobar')
      })
    })

    describe('focus', () => {
      it('calls focus', () => {
        const textInput = mount(<TextInput />)
        const inputTag = textInput.find('input').instance()
        inputTag.focus = jest.fn().mockName('focus')

        textInput.instance().focus()
        expect(inputTag.focus).toHaveBeenCalled()
      })
    })
  })
})
