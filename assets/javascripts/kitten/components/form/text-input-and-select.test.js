import React from 'react'

import { TextInputAndSelect } from
  'kitten/components/form/text-input-and-select'
import { SelectWithState } from 'kitten/components/form/select-with-state'
import { TextInput } from 'kitten/components/form/text-input'

describe('<TextInputWithSelect />', () => {
  describe('by default', () => {
    test('renders 2 <div class="k-FormComposer__element">', () => {
      const component = shallow(<TextInputAndSelect />)
      const wrapper = component.find('.k-FormComposer__element')

      expect(wrapper).toHaveLength(2)
    })

    test('renders a <div class="k-FormComposer__element--main">', () => {
      const component = shallow(<TextInputAndSelect />)
      const wrapper = component.find('.k-FormComposer__element--main')

      expect(wrapper).toHaveLength(1)
    })


    test('renders a <TextInput /> component', () => {
      const component = shallow(<TextInputAndSelect />)
      const textInput = component.find(TextInput)

      expect(textInput).toHaveLength(1)
    })


    test('renders a <Select /> component', () => {
      const component = shallow(<TextInputAndSelect />)
      const selectWithState = component.find(SelectWithState)

      expect(selectWithState).toHaveLength(1)
    })
  })

  describe('with tiny prop', () => {
    test('pass the tiny prop to <TextInput />', () => {
      const component = shallow(<TextInputAndSelect tiny />)
      const textInput = component.find(TextInput)
      const expectedProps = { tiny: true }

      expect(textInput.props()).toEqual(expect.arrayContaining(expectedProps))
    })
  })

  describe('with disabled prop', () => {
    test('pass the disabled prop to <TextInput />', () => {
      const component = shallow(<TextInputAndSelect disabled />)
      const textInput = component.find(TextInput)
      const expectedProps = { disabled: true }

      expect(textInput.props()).to.contain.any.keys(expectedProps)
    })

    test('pass the disabled prop to <SelectWithState />', () => {
      const component = shallow(<TextInputAndSelect disabled />)
      const selectWithState = component.find(SelectWithState)
      const expectedProps = { disabled: true }

      expect(selectWithState.props()).to.contain.any.keys(expectedProps)
    })

  })

  describe('with error prop', () => {
    test('pass the error prop to <TextInput />', () => {
      const component = shallow(<TextInputAndSelect error />)
      const textInput = component.find(TextInput)
      const expectedProps = { error: true }

      expect(textInput.props()).to.contain.any.keys(expectedProps)
    })
  })

  describe('with valid prop', () => {
    test('pass the valid prop to <TextInput />', () => {
      const component = shallow(<TextInputAndSelect valid />)
      const textInput = component.find(TextInput)
      const expectedProps = { valid: true }

      expect(textInput.props()).to.contain.any.keys(expectedProps)
    })
  })

  describe('with validOnSelect prop', () => {
    test('pass the validOnSelect prop to <SelectWithState />', () => {
      const component = shallow(<TextInputAndSelect validOnSelect />)
      const selectWithState = component.find(SelectWithState)
      const expectedProps = { valid: true }

      expect(selectWithState.props()).to.contain.any.keys(expectedProps)
    })
  })

  describe('with selectName prop', () => {
    test('pass the selectName prop to <SelectWithState />', () => {
      const selectName = 'custom-select-name'
      const component = shallow(<TextInputAndSelect selectName={ selectName } />)
      const selectWithState = component.find(SelectWithState)
      const expectedProps = { name: selectName }

      expect(selectWithState.props()).to.contain.any.keys(expectedProps)
    })
  })

  describe('with selectValue prop', () => {
    test('pass the selectName prop to <SelectWithState />', () => {
      const selectValue = 'custom-select-value'
      const component = shallow(<TextInputAndSelect selectValue={ selectValue } />)
      const selectWithState = component.find(SelectWithState)
      const expectedProps = { value: selectValue }

      expect(selectWithState.props()).to.contain.any.keys(expectedProps)
    })
  })

  describe('with digits prop', () => {
    test(
      'removes k-FormComposer__element--main class from the input wrapper',
      () => {
        const component = shallow(<TextInputAndSelect digits="2" />)
        const input = component.find('.k-FormComposer__element--main')

        expect(input).toHaveLength(0)
      }
    )
  })

  describe('with onSelectChange prop', () => {
    test('pass the selectName prop to <SelectWithState />', () => {
      const handleSelectChange = () => {}
      const component = shallow(<TextInputAndSelect
        onSelectChange={ handleSelectChange }
      />)
      const selectWithState = component.find(SelectWithState)
      const expectedProps = { onInputChange: handleSelectChange }

      expect(selectWithState.props()).to.contain.any.keys(expectedProps)
    })
  })

  describe('with errorOnSelect prop', () => {
    test('pass the errorOnSelect prop to <SelectWithState />', () => {
      const component = shallow(<TextInputAndSelect errorOnSelect />)
      const selectWithState = component.find(SelectWithState)
      const expectedProps = { error: true }

      expect(selectWithState.props()).to.contain.any.keys(expectedProps)
    })
  })

  describe ('with a custom class', () => {
    test('pass the class name to the input wrapper', () => {
      const component = shallow(
        <TextInputAndSelect className="k-TextInput--custom" />
      )
      const inputWrapper = component.find('.k-TextInput--custom')

      expect(inputWrapper).toHaveLength(1)
    })
  })

  describe('with custom prop', () => {
    test('pass the prop to <TextInput />', () => {
      const component = shallow(<TextInputAndSelect data-custom="Alice" />)
      const textInput = component.find(TextInput)
      const expectedProps = { ['data-custom']: 'Alice' }

      expect(textInput.props()).to.contain.any.keys(expectedProps)
    })
  })

  // TODO
  describe('with appendSelect prop', () => {})
})
