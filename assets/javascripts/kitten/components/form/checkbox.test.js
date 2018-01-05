import React from 'react'

import { Checkbox } from 'kitten/components/form/checkbox'

describe('<Checkbox />', () => {
  describe('By default', () => {
    const component = shallow(<Checkbox />)
    const input = component.find('input')
    const label = component.find('label')

    test('renders an input.k-Checkbox__input', () => {
      expect(input).to.tagName('input')
      expect(input.hasClass('k-Checkbox__input')).toBe(true)
    })

    test('renders a label.k-Checkbox__label', () => {
      expect(label).to.tagName('label')
      expect(label.hasClass('k-Checkbox__label')).toBe(true)
    })
  })

  describe('error prop', () => {
    const component = shallow(<Checkbox error />)
    const input = component.find('input')

    test('passes the right props to the `input` component', () => {
      expect(input.hasClass('is-error')).toBe(true)
    })
  })

  describe('disabled prop', () => {
    const component = shallow(<Checkbox disabled />)
    const input = component.find('input')

    test('passes the right props to the `input` component', () => {
      expect(input.props()).toEqual(expect.arrayContaining(Object.keys({ disabled: true })))
    })
  })

  describe('children prop', () => {
    const component = shallow(
      <Checkbox>
        <svg />
      </Checkbox>
    )
    const labelChildren = component.find('label').children()

    test('passes the right props to the `label` component', () => {
      expect(labelChildren).to.have.tagName('svg')
    })
  })
})
