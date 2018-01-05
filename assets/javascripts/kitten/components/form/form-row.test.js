import React from 'react'

import { FormRow } from 'kitten/components/form/form-row'

describe('<FormRow />', () => {
  test('renders a <div class="k-FormRow" />', () => {
    const component = shallow(<FormRow />)

    expect(component).to.have.tagName('div')
    expect(component.hasClass('k-FormRow')).to.equal(true)
  })

  test('has a custom class', () => {
    const component = shallow(
      <FormRow className="test-FormRow--lorem" />
    )

    expect(component.hasClass('test-FormRow--lorem')).to.equal(true)
  })

  test('renders children', () => {
    const component = shallow(
      <FormRow>
        <p>Lorem ipsum…</p>
      </FormRow>
    )

    expect(component).to.have.text('Lorem ipsum…')
  })
})
