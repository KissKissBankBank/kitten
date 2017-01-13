import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { Checkbox } from 'kitten/components/form/checkbox'

describe('Checkbox with default props', () => {
  const defaultComponent = shallow(
    <Checkbox />)

  it('has a default class attribute', () => {
    expect(defaultComponent.find('k-Checkbox')).to.have.length(0)
  })

  it('has a default input attributes', () => {
    const input = defaultComponent.find('input')

    expect(input).to.have.attr('id', 'input-1')
    expect(input).to.have.attr('type', 'checkbox')
    expect(input).to.have.className('k-Checkbox__input')
    expect(input).attr('value')
    expect(input).not.to.have.attr('disabled')
    expect(input).not.to.have.attr('checked')
  })

  it('has a default label attributes', () => {
    const label = defaultComponent.find('label')

    expect(label).to.have.attr('for', 'input-1')
    expect(label).not.to.have.attr('text')
  })

  describe('<Checkbox />', () => {
    const component = shallow(
      <Checkbox id="input-1"
                type="checkbox"
                className="k-Checkbox__input"
                value="null"
                htmlFor="input-1"
                text="Filter 1" />
    )

    it('has a <div class="k-Checkbox" />', () => {
      expect(component).to.have.className('k-Checkbox')
    })

    it('renders input', () => {
      const input = component.find('input')

      expect(input).to.have.attr('id', 'input-1')
      expect(input).to.have.attr('type', 'checkbox')
      expect(input).to.have.attr('value', 'null')
      expect(input).to.have.className('k-Checkbox__input')
    })

    describe('checked', () => {
      const component = shallow(
        <Checkbox checked="true" />
      )

      it('has a checked attribute', () => {
        const input = component.find('input')
        expect(input).to.have.attr('checked')
      })
    })

    describe('disabled', () => {
      const component = shallow(
        <Checkbox disabled="true" />
      )

      it('has a disabled attribute', () => {
        const input = component.find('input')
        expect(input).to.have.attr('disabled')
      })
    })
  })
})
