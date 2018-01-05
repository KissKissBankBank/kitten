import React from 'react'
import { shallow } from 'enzyme'
import { FormRow } from 'kitten/components/form/form-row'

describe('<FormRow />', () => {
  it('renders a <div class="k-FormRow" />', () => {
    const component = shallow(<FormRow />)

    expect(component).to.have.tagName('div')
    expect(component).to.have.className('k-FormRow')
  })

  it('has a custom class', () => {
    const component = shallow(
      <FormRow className="test-FormRow--lorem" />
    )

    expect(component).to.have.className('test-FormRow--lorem')
  })

  it('renders children', () => {
    const component = shallow(
      <FormRow>
        <p>Lorem ipsum…</p>
      </FormRow>
    )

    expect(component).to.have.text('Lorem ipsum…')
  })
})
