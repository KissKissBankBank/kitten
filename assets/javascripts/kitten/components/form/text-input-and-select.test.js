import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { TextInputAndSelect } from
  'kitten/components/form/text-input-and-select'
import SelectWithState from 'kitten/components/form/select-with-state'
import { TextInput } from 'kitten/components/form/text-input'

describe('<TextInputWithSelect />', () => {
  describe('by default', () => {
    it('renders 2 <div class="k-FormComposer__element">', () => {
      const component = shallow(<TextInputAndSelect />)
      const wrapper = component.find('.k-FormComposer__element')

      expect(wrapper).to.have.length(2)
    })

    it('renders a <div class="k-FormComposer__element--main">', () => {
      const component = shallow(<TextInputAndSelect />)
      const wrapper = component.find('.k-FormComposer__element--main')

      expect(wrapper).to.have.length(1)
    })


    it('renders a <TextInput /> component', () => {
      const component = shallow(<TextInputAndSelect />)
      const textInput = component.find(TextInput)

      expect(textInput).to.have.length(1)
    })


    it('renders a <Select /> component', () => {
      const component = shallow(<TextInputAndSelect />)
      const selectWithState = component.find(SelectWithState)

      expect(selectWithState).to.have.length(1)
    })
  })

  describe('with tiny prop', () => {
    it('pass the tiny prop to <TextInput />', () => {
      const component = shallow(<TextInputAndSelect tiny />)
      const textInput = component.find(TextInput)
      const expectedProps = {
        tiny: true
      }

      expect(textInput.props()).to.contain.all.keys(expectedProps)
    })
  })

  describe('with disabled prop', () => {
    it('pass the disabled prop to <TextInput />', () => {
      const component = shallow(<TextInputAndSelect disabled />)
      const textInput = component.find(TextInput)
      const expectedProps = { disabled: true }

      expect(textInput.props()).to.contain.any.keys(expectedProps)
    })
  })

  describe('with selectName prop', () => {
    it('pass the selectName prop to <SelectWithState />', () => {
      const selectName = 'custom-select-name'
      const component = shallow(<TextInputAndSelect selectName={ selectName } />)
      const selectWithState = component.find(SelectWithState)
      const expectedProps = { name: selectName }

      expect(selectWithState.props()).to.contain.any.keys(expectedProps)
    })
  })

  describe('with selectValue prop', () => {
    it('pass the selectName prop to <SelectWithState />', () => {
      const selectValue = 'custom-select-value'
      const component = shallow(<TextInputAndSelect selectValue={ selectValue } />)
      const selectWithState = component.find(SelectWithState)
      const expectedProps = { value: selectValue }

      expect(selectWithState.props()).to.contain.any.keys(expectedProps)
    })
  })

  describe('with digits prop', () => {
    it('removes k-FormComposer__element--main class from the input wrapper', () => {
      const component = shallow(<TextInputAndSelect digits="2" />)
      const input = component.find('.k-FormComposer__element--main')

      expect(input).to.have.length(0)
    })
  })

  describe('with onSelectChange prop', () => {
    it('pass the selectName prop to <SelectWithState />', () => {
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
    it('pass the errorOnSelect prop to <SelectWithState />', () => {
      const handleSelectChange = () => {}
      const component = shallow(<TextInputAndSelect errorOnSelect />)
      const selectWithState = component.find(SelectWithState)
      const expectedProps = { error: true }

      expect(selectWithState.props()).to.contain.any.keys(expectedProps)
    })
  })

  describe('with custom prop', () => {
    it('pass the prop to <TextInput />', () => {
      const component = shallow(<TextInputAndSelect data-custom="Alice" />)
      const textInput = component.find(TextInput)
      const expectedProps = { ['data-custom']: 'Alice' }

      expect(textInput.props()).to.contain.any.keys(expectedProps)
    })
  })

  // TODO
  describe('with appendSelect prop', () => {})
})
