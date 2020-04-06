import React from 'react'
import { RadioButton } from '../../components/form/radio-button'

describe('<RadioButton />', () => {
  describe('By default', () => {
    const component = shallow(<RadioButton />)
    const input = component.find('input')
    const label = component.find('label')

    it('renders an input.k-RadioButton__input">', () => {
      expect(input.is('input')).toBe(true)
      expect(input.hasClass('k-RadioButton__input')).toBe(true)
    })

    it('renders a label.k-RadioButton__label">', () => {
      expect(label.is('label')).toBe(true)
      expect(label.hasClass('k-RadioButton__label')).toBe(true)
    })
  })

  describe('large prop', () => {
    const component = shallow(<RadioButton large />)
    const label = component.find('label')

    it('passes the right props to the `label` component', () => {
      expect(label.hasClass('k-RadioButton__label--large')).toBe(true)
    })
  })

  describe('largeContent prop', () => {
    const component = shallow(<RadioButton largeContent>Hello</RadioButton>)
    const labelContents = component.find('.k-RadioButton__labelContents')

    it('passes the right props to the `contentLarge` component', () => {
      expect(
        labelContents.hasClass('k-RadioButton__labelContents--large'),
      ).toBe(true)
    })
  })

  describe('error prop', () => {
    const component = shallow(<RadioButton error />)
    const input = component.find('input')

    it('passes the right props to the `input`component', () => {
      expect(input.hasClass('is-error')).toBe(true)
    })
  })
})
