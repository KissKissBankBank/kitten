import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { Switch } from 'kitten/components/form/switch'

describe('<Switch />', () => {
  const component = shallow(
    <Switch id="switch-input-1"
            isChecked="true"
            disabled="true"
            label="label" />
  )

  it('has a <div class="k-Switch" />', () => {
    expect(component).to.have.tagName('div')
    expect(component).to.have.className('k-Switch')
  })

  it('renders input', () => {
    const input = component.find('input')

    expect(input).to.have.attr('id', 'switch-input-1')
    expect(input).to.have.attr('type', 'checkbox')
    expect(input).to.have.className('k-Switch__input')
    expect(input).to.have.attr('checked')
    expect(input).to.have.attr('disabled')
  })

  it('renders label', () => {
    const label = component.find('label')

    expect(label).to.have.attr('for', 'switch-input-1')
    expect(label).to.have.className('k-Switch__label')
    expect(label).to.have.text('label')
  })

  describe('big', () => {
    const componentBig = shallow(
      <Switch big="true" />
    )

    it('has a big class', () => {
      const label = componentBig.find('label')

      expect(label).to.have.className('k-Switch__label--big')
    })
  })
})
