import React from 'react'
import { shallow, mount } from 'enzyme'
import { RadioButton } from 'kitten/components/form/radio-button'

describe('<RadioButton />', () => {
  describe('By default', () => {
    const component = shallow(<RadioButton />)
    const input = component.find('input')
    const label = component.find('label')

    test('renders an input.k-RadioButton__input">', () => {
      expect(input).to.tagName('input')
      expect(input.hasClass('k-RadioButton__input')).toBe(true)
    })

    test('renders a label.k-RadioButton__label">', () => {
      expect(label).to.tagName('label')
      expect(label.hasClass('k-RadioButton__label')).toBe(true)
    })
  })

  describe('large prop', () => {
    const component = shallow(<RadioButton large />)
    const label = component.find('label')

    test('passes the right props to the `label` component', () => {
      expect(label.hasClass("k-RadioButton__label--large")).to.equal(true)
    })
  })

  describe('largeContent prop', () => {
    const component = shallow(
      <RadioButton largeContent>Hello</RadioButton>
    )
    const label = component.find('label')
    const labelContents = component.find('.k-RadioButton__labelContents')

    test('passes the right props to the `contentLarge` component', () => {
      expect(labelContents).to.have.className(
        'k-RadioButton__labelContents--large'
      )
    })
  })

  describe('error prop', () => {
    const component = shallow(<RadioButton error />)
    const input = component.find('input')

    test('passes the right props to the `input`component', () => {
      expect(input.hasClass('is-error')).to.equal(true)
    })
  })
})
