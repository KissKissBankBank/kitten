import React from 'react'
import sinon from 'sinon'
import { CheckboxButton } from '../../form/checkbox-button'
import { Text } from '../../typography/text'
import renderer from 'react-test-renderer'

const sinonTest = require('sinon-test')(sinon)

describe('<CheckboxButton />', () => {
  describe('default', () => {
    let component
    beforeEach(() => {
      component = renderer
        .create(<CheckboxButton id="test-checkbox">Label</CheckboxButton>)
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
        .create(
          <CheckboxButton
            id="test-checkbox"
            label="Test label"
            labelProps={{ className: 'custom-label-className' }}
          />,
        )
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
          <CheckboxButton
            id="test-checkbox"
            label="Main label"
            labelProps={{ className: 'custom-label-className' }}
            textProps={{ className: 'custom-text-className' }}
          >
            Secondary content
          </CheckboxButton>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('error prop', () => {
    const component = shallow(<CheckboxButton error />)
    const container = component.find('.k-Form-CheckboxButton')

    it('passes the right props to the container element', () => {
      expect(container.hasClass('k-Form-CheckboxButton--error')).toBe(true)
    })
  })

  describe('disabled prop', () => {
    const component = shallow(<CheckboxButton disabled />)
    const input = component.find('input')

    it('passes the right props to the `input` component', () => {
      expect(input.props()).toMatchObject({ disabled: true })
    })
  })

  describe('children prop', () => {
    const component = shallow(
      <CheckboxButton>
        <svg />
      </CheckboxButton>,
    )
    const labelChildren = component.find(Text).children().children()

    it('passes the right props to the `label` component', () => {
      expect(labelChildren.type()).toBe('svg')
    })
  })

  describe('textProps prop', () => {
    const component = shallow(
      <CheckboxButton textProps={{ weight: '500' }}>
        Lorem ipsum…
      </CheckboxButton>,
    )
    const labelText = component.find(Text)

    it('passes the right props to the `Text` component', () => {
      expect(labelText.prop('weight')).toBe('500')
    })
  })

  describe('onLabelClick', () => {
    it(
      'should handle click callback on click label',
      sinonTest(function () {
        const clickSpy = this.spy()
        const wrapper = shallow(
          <CheckboxButton children="Label" onLabelClick={clickSpy}>
            CLICK
          </CheckboxButton>,
        )
        wrapper.find('.k-Form-CheckboxButton__label').simulate('click')
        expect(clickSpy.calledOnce).toBe(true)
      }),
    )
  })
})
