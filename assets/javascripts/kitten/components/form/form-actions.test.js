import React from 'react'
import { shallow, mount } from 'enzyme'
import { FormActions } from 'kitten/components/form/form-actions'

describe('<FormActions />', () => {

  test('renders a <div class="k-FormActions" />', () => {
    const component = shallow(<FormActions />)

    expect(component).to.have.tagName('div')
    expect(component.hasClass('k-FormActions')).toBe(true)
  })

  test('has a custom class', () => {
    const component = shallow(
      <FormActions className="test-FormActions--lorem" />
    )

    expect(component.hasClass('test-FormActions--lorem')).toBe(true)
  })

  test('renders children', () => {
    const component = shallow(
      <FormActions>
        <p>Lorem ipsum…</p>
      </FormActions>
    )

    expect(component).to.have.text('Lorem ipsum…')
  })

  test('with spreadOutAt prop', () => {
    const component = mount(
      <FormActions spreadOutAt="s-up" />
    )

    expect(component).to.have.prop('spreadOutAt').toBe('s-up')
  })
})

describe('<FormActions.Item />', () => {
  describe('by default', () => {
    const component = shallow(<FormActions.Item />)

    test('renders a <div />', () => {
      expect(component).to.have.tagName('div')
    })

    test('has "k-FormActions__item" class', () => {
      expect(component.hasClass('k-FormActions__item')).toBe(true)
    })
  })

  describe('className prop', () => {
    const component = shallow(
      <FormActions.Item className="k-FormActions__item--test" />
    )

    test('has a custom class', () => {
      expect(component.hasClass('k-FormActions__item--test')).toBe(true)
    })
  })

  describe('children prop', () => {
    const component = shallow(
      <FormActions.Item>
        <p>Lorem ipsum…</p>
      </FormActions.Item>
    ).children()

    test('renders a <p>', () => {
      expect(component).to.have.tagName('p')
    })
  })
})
