import React from 'react'
import { FormRow } from '../../../components/form/form-row'

describe('<FormRow />', () => {
  it('renders a <div class="k-FormRow" />', () => {
    const component = shallow(<FormRow />)

    expect(component.is('div')).toBe(true)
    expect(component.hasClass('k-FormRow')).toBe(true)
  })

  it('has a custom class', () => {
    const component = shallow(<FormRow className="test-FormRow--lorem" />)

    expect(component.hasClass('test-FormRow--lorem')).toBe(true)
  })

  it('renders children', () => {
    const component = shallow(
      <FormRow>
        <p>Lorem ipsum…</p>
      </FormRow>,
    )

    expect(component.text()).toBe('Lorem ipsum…')
  })
})
