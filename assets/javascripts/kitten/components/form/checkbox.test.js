import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { Checkbox } from 'kitten/components/form/checkbox'

describe('Checkbox with default props', () => {
  const defaultComponent = shallow(
    <Checkbox />)

  it('has a default attribute', () => {
    expect(defaultComponent).to.have.attr('id', 'input-1')
    expect(defaultComponent).to.have.attr('value', 'ok')
    expect(defaultComponent).to.have.attr('text', 'Filter-1')
    expect(defaultComponent).not.to.have.attr('disabled')
    expect(defaultComponent).not.to.have.attr('checked')
  })

  describe('<Checkbox />', () => {
    const component = shallow(
      <Checkbox id="input-1"
                type="checkbox"
                className="k-Checkbox__input"
                value="input" />
    )

    it('has a <div class="k-Checkbox" />', () => {
      expect(component).to.have.className('k-Checkbox')
    })

    it('renders input', () => {
      const input = component.find('input')

      expect(input).to.have.attr('id', 'input-1')
      expect(input).to.have.attr('type', 'checkbox')
      expect(input).to.have.attr('value', 'input')
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
