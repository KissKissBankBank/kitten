import React from 'react'
import { Switch } from '../../../components/form/switch'

describe('<Switch />', () => {
  const component = shallow(
    <Switch
      id="switch-input-1"
      isChecked="true"
      disabled="true"
      label="label"
    />,
  )

  it('has a <div class="k-Switch" />', () => {
    expect(component.is('div')).toBe(true)
    expect(component.hasClass('k-Switch')).toBe(true)
  })

  it('renders input', () => {
    const input = component.find('input')

    expect(input.hasClass('k-Switch__input')).toBe(true)
    expect(input.props().id).toBe('switch-input-1')
    expect(input.props().type).toBe('checkbox')
    expect(input.props().defaultChecked).toBe('true')
    expect(input.props().disabled).toBe('true')
  })

  it('renders label', () => {
    const label = component.find('label')

    expect(label.props().htmlFor).toBe('switch-input-1')
    expect(label.hasClass('k-Switch__label')).toBe(true)
    expect(label.text()).toBe('label')
  })

  describe('big', () => {
    const componentBig = shallow(<Switch big="true" />)

    it('has a big class', () => {
      const label = componentBig.find('label')

      expect(label.hasClass('k-Switch__label--big')).toBe(true)
    })
  })
})
