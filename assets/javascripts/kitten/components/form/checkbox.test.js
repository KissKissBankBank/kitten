import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { Checkbox } from 'kitten/components/form/checkbox'

describe('Checkbox with default props', () => {
  const defaultComponent = shallow(
    <Checkbox />)

  it('renders <div class="k-Checkbox">', () => {
    expect(defaultComponent.find('.k-Checkbox')).to.have.length(1)
  })

  it('has a default label attributes', () => {
    const label = defaultComponent.find('label')

    expect(label).to.have.text('Filter 1')
  })

  describe('<Checkbox />', () => {
    const component = shallow(
      <Checkbox id="input-1"
                htmlFor="input-1"
                children="Filter 1"
                className="custom-class"
                inputClassName="custom-input-class" />
    )

    it('renders a <div class="k-Checkbox" />', () => {
      expect(component).to.have.className('k-Checkbox')
      expect(component).to.have.className('custom-class')
    })

    it('renders input with passed props', () => {
      const input = component.find('input')

      expect(input).to.have.attr('id', 'input-1')
      expect(input).to.have.className('custom-input-class')
    })
  })

  describe('with children', () => {
    const componentChildren = shallow(
      <Checkbox>
        <svg />
      </Checkbox>
    )

    it('renders the children inside the label', () => {
      const labelChildren = componentChildren.find('label').children()

      expect(labelChildren).to.have.tagName('svg')
    })
  })
})
