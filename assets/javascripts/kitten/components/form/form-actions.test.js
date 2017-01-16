import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
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
})
