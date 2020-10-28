import React from 'react'
import sinon from 'sinon'
import { Checkbox } from '../../../components/form/checkbox'
import { Text } from '../../../components/typography/text'

const sinonTest = require('sinon-test')(sinon)

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

  describe('onLabelClick', () => {
    it(
      'should handle click callback on click label',
      sinonTest(function () {
        const clickSpy = this.spy()
        const wrapper = shallow(
          <Checkbox onLabelClick={clickSpy}>CLICK</Checkbox>,
        )
        wrapper.find('label').simulate('click')
        expect(clickSpy.calledOnce).toBe(true)
      }),
    )
  })
})
