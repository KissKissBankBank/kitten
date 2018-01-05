import React from 'react'

import { Switch } from 'kitten/components/form/switch'

describe('<Switch />', () => {
  const component = shallow(
    <Switch id="switch-input-1"
            isChecked="true"
            disabled="true"
            label="label" />
  )

  test('has a <div class="k-Switch" />', () => {
    expect(component).to.have.tagName('div')
    expect(component.hasClass('k-Switch')).to.equal(true)
  })

  test('renders input', () => {
    const input = component.find('input')

    expect(input).to.have.attr('id', 'switch-input-1')
    expect(input).to.have.attr('type', 'checkbox')
    expect(input.hasClass('k-Switch__input')).to.equal(true)
    expect(input).to.have.attr('checked')
    expect(input).to.have.attr('disabled')
  })

  test('renders label', () => {
    const label = component.find('label')

    expect(label).to.have.attr('for', 'switch-input-1')
    expect(label.hasClass('k-Switch__label')).to.equal(true)
    expect(label).to.have.text('label')
  })

  describe('big', () => {
    const componentBig = shallow(
      <Switch big="true" />
    )

    test('has a big class', () => {
      const label = componentBig.find('label')

      expect(label.hasClass('k-Switch__label--big')).to.equal(true)
    })
  })
})
