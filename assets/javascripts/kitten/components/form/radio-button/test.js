import React from 'react'
import { RadioButton } from '../../../components/form/radio-button'
import renderer from 'react-test-renderer'

describe('<RadioButton />', () => {
  describe('By default', () => {
    const component = shallow(<RadioButton id="test-id" text="Label Text" />)
    const input = component.find('input')

    it('renders an input.k-Form-RadioButton__input">', () => {
      expect(input.is('input')).toBe(true)
      expect(input.hasClass('k-Form-RadioButton__input')).toBe(true)
    })
  })

  describe('large prop', () => {
    const component = shallow(
      <RadioButton id="test-id" text="Label Text" large />,
    )
    const radioButton = component.find('.k-Form-RadioButton')

    it('passes the right props to the component', () => {
      expect(radioButton.hasClass('k-Form-RadioButton--largeLabel')).toBe(true)
    })
  })

  describe('largeContent prop', () => {
    const component = shallow(
      <RadioButton id="test-id" text="Label Text" largeContent>
        Hello
      </RadioButton>,
    )
    const radioButton = component.find('.k-Form-RadioButton')

    it('passes the right props to the component', () => {
      expect(radioButton.hasClass('k-Form-RadioButton--largeContent')).toBe(
        true,
      )
    })
  })

  describe('error prop', () => {
    const component = shallow(
      <RadioButton id="test-id" text="Label Text" error />,
    )
    const input = component.find('.k-Form-RadioButton')

    it('passes the right props to the `input`component', () => {
      expect(input.hasClass('k-Form-RadioButton--error')).toBe(true)
    })
  })

  describe('default', () => {
    let component
    beforeEach(() => {
      component = renderer
        .create(<RadioButton id="test-id" text="Text" />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
