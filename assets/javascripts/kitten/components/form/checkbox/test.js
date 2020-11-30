import React from 'react'
import sinon from 'sinon'
import { Checkbox } from '../../../components/form/checkbox'
import { Text } from '../../../components/typography/text'
import renderer from 'react-test-renderer'

const sinonTest = require('sinon-test')(sinon)

describe('<Checkbox />', () => {
  describe('default', () => {
    let component
    beforeEach(() => {
      component = renderer
        .create(<Checkbox id="test-checkbox">Label</Checkbox>)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with label prop', () => {
    let component
    beforeEach(() => {
      component = renderer
        .create(<Checkbox id="test-checkbox" label="Test label" />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('whith label and children props', () => {
    let component
    beforeEach(() => {
      component = renderer
        .create(
          <Checkbox id="test-checkbox" label="Main label">
            Secondary content
          </Checkbox>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('error prop', () => {
    const component = shallow(<Checkbox error />)
    const container = component.find('.k-Form-Checkbox')

    it('passes the right props to the container element', () => {
      expect(container.hasClass('k-Form-Checkbox--error')).toBe(true)
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
          <Checkbox children="Label" onLabelClick={clickSpy}>
            CLICK
          </Checkbox>,
        )
        wrapper.find('.k-Form-Checkbox__label').simulate('click')
        expect(clickSpy.calledOnce).toBe(true)
      }),
    )
  })
})
