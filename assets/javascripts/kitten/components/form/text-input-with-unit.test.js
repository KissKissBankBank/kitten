import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { TextInputWithUnit } from '../../components/form/text-input-with-unit'

describe('<TextInputWithUnit />', () => {
  let component

  describe('by default', () => {
    const component = shallow(<TextInputWithUnit />)

    it('renders a <div />', () => {
      expect(component.is('div')).toBe(true)
    })

    it('has a "k-TextInputWithUnit" class', () => {
      expect(component.hasClass('k-TextInputWithUnit')).toBe(true)
    })

    it('has a "k-TextInputWithUnit--fullWidth" class', () => {
      expect(component.hasClass('k-TextInputWithUnit--fullWidth')).toBe(true)
    })

    it('renders an input.k-TextInputWithUnit__input', () => {
      const textInput = component.find('TextInput')

      expect(textInput.dive().is('input')).toBe(true)
      expect(textInput.dive().hasClass('k-TextInputWithUnit__input')).toBe(true)
    })

    it('renders a span.k-TextInputWithUnit__unit', () => {
      const span = component.find('span')

      expect(span.is('span')).toBe(true)
      expect(span.hasClass('k-TextInputWithUnit__unit')).toBe(true)
    })
  })

  describe('with `tiny` prop', () => {
    beforeEach(() => {
      component = renderer.create(<TextInputWithUnit tiny />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `valid` prop', () => {
    beforeEach(() => {
      component = renderer.create(<TextInputWithUnit valid />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `error` prop', () => {
    beforeEach(() => {
      component = renderer.create(<TextInputWithUnit error />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('unitWord prop', () => {
    const component = mount(<TextInputWithUnit unitWord />)
    const span = component.find('span')
    const spanExpectation = span.hasClass('k-TextInputWithUnit__unitWord')

    it('has a <span /> with "k-TextInputWithUnit__unitWord" class', () => {
      expect(spanExpectation).toBe(true)
    })
  })

  describe('digits prop', () => {
    const component = mount(<TextInputWithUnit digits={2} />)

    it('does not have "k-TextInputWithUnit--fullWidth" class', () => {
      expect(component.hasClass('k-TextInputWithUnit--fullWidth')).toBe(false)
    })

    it('has a <TextInput /> with digits prop', () => {
      expect(component.find('TextInput').props().digits).toBe(2)
    })
  })

  describe('disabled prop', () => {
    const component = mount(<TextInputWithUnit disabled />)
    const textInput = component.find('TextInput')
    const span = component.find('span')
    const spanExpectation = span.hasClass('is-inactive')

    it('has a disabled <input />', () => {
      expect(textInput.props().disabled).toBeTruthy()
    })

    it('has a <span /> with "is-inactive" class', () => {
      expect(spanExpectation).toBe(true)
    })
  })
})
