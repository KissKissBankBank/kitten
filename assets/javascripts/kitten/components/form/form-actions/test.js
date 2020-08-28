import React from 'react'
import { FormActions } from '../../../components/form/form-actions'

describe('<FormActions />', () => {
  it('renders a <div class="k-FormActions" />', () => {
    const component = shallow(<FormActions />)

    expect(component.type()).toBe('div')
    expect(component.hasClass('k-FormActions')).toBe(true)
  })

  it('has a custom class', () => {
    const component = shallow(
      <FormActions className="test-FormActions--lorem" />,
    )

    expect(component.hasClass('test-FormActions--lorem')).toBe(true)
  })

  it('renders children', () => {
    const component = shallow(
      <FormActions>
        <p>Lorem ipsum…</p>
      </FormActions>,
    )

    expect(component.text()).toBe('Lorem ipsum…')
  })

  it('with spreadOutAt prop', () => {
    const component = mount(<FormActions spreadOutAt="s-up" />)

    expect(component.props().spreadOutAt).toBe('s-up')
  })
})

describe('<FormActions.Item />', () => {
  describe('by default', () => {
    const component = shallow(<FormActions.Item />)

    it('renders a <div />', () => {
      expect(component.type()).toBe('div')
    })

    it('has "k-FormActions__item" class', () => {
      expect(component.hasClass('k-FormActions__item')).toBe(true)
    })
  })

  describe('className prop', () => {
    const component = shallow(
      <FormActions.Item className="k-FormActions__item--test" />,
    )

    it('has a custom class', () => {
      expect(component.hasClass('k-FormActions__item--test')).toBe(true)
    })
  })

  describe('children prop', () => {
    const component = shallow(
      <FormActions.Item>
        <p>Lorem ipsum…</p>
      </FormActions.Item>,
    ).children()

    it('renders a <p>', () => {
      expect(component.type()).toBe('p')
    })
  })
})
