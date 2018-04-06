import React from 'react'
import { Checkbox } from 'kitten/components/form/checkbox'
import { Text } from 'kitten/components/typography/text'

describe('<Checkbox />', () => {
  describe('By default', () => {
    const component = shallow(<Checkbox />)
    const input = component.find('input')
    const label = component.find('label')

    it('renders an input.k-Checkbox__input', () => {
      expect(input.type()).toBe('input')
      expect(input.hasClass('k-Checkbox__input')).toBe(true)
    })

    it('renders a label.k-Checkbox__label', () => {
      expect(label.type()).toBe('label')
      expect(label.hasClass('k-Checkbox__label')).toBe(true)
    })

    it('renders a <Text />', () => {
      expect(label.find(Text)).toHaveLength(1)
    })
  })

  describe('error prop', () => {
    const component = shallow(<Checkbox error />)
    const input = component.find('input')

    it('passes the right props to the `input` component', () => {
      expect(input.hasClass('is-error')).toBe(true)
    })
  })

  describe('disabled prop', () => {
    const component = shallow(<Checkbox disabled />)
    const input = component.find('input')

    it('passes the right props to the `input` component', () => {
      expect(input.props()).toMatchObject({ disabled: true })
    })
  })

  describe('children prop', () => {
    const component = shallow(
      <Checkbox>
        <svg />
      </Checkbox>,
    )
    const labelChildren = component.find(Text).children()

    it('passes the right props to the `label` component', () => {
      expect(labelChildren.type()).toBe('svg')
    })
  })

  describe('textProps prop', () => {
    const component = shallow(
      <Checkbox textProps={{ weight: 'regular' }}>Lorem ipsum…</Checkbox>,
    )
    const labelText = component.find(Text)

    it('passes the right props to the `Text` component', () => {
      expect(labelText.prop('weight')).toBe('regular')
    })
  })
})
