import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import { FormActions } from 'kitten/components/form/form-actions'

describe('<FormActions />', () => {

  it('renders a <div class="k-FormActions" />', () => {
    const component = shallow(<FormActions />)

    expect(component).to.have.tagName('div')
    expect(component).to.have.className('k-FormActions')
  })

  it('has a custom class', () => {
    const component = shallow(
      <FormActions className="test-FormActions--lorem" />
    )

    expect(component).to.have.className('test-FormActions--lorem')
  })

  it('renders children', () => {
    const component = shallow(
      <FormActions>
        <p>Lorem ipsum…</p>
      </FormActions>
    )

    expect(component).to.have.text('Lorem ipsum…')
  })

  it('with spreadOutAt prop', () => {
    const component = mount(
      <FormActions spreadOutAt="s-up" />
    )

    expect(component).to.have.prop('spreadOutAt').equal('s-up')
  })
})

describe('<FormActions.Item />', () => {
  describe('by default', () => {
    const component = shallow(<FormActions.Item />)

    it('renders a <div />', () => {
      expect(component).to.have.tagName('div')
    })

    it('has "k-FormActions__item" class', () => {
      expect(component).to.have.className('k-FormActions__item')
    })
  })

  describe('className prop', () => {
    const component = shallow(
      <FormActions.Item className="k-FormActions__item--test" />
    )

    it('has a custom class', () => {
      expect(component).to.have.className('k-FormActions__item--test')
    })
  })

  describe('children prop', () => {
    const component = shallow(
      <FormActions.Item>
        <p>Lorem ipsum…</p>
      </FormActions.Item>
    ).children()

    it('renders a <p>', () => {
      expect(component).to.have.tagName('p')
    })
  })
})
