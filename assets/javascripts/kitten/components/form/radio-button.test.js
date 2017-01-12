import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { RadioButton } from 'kitten/components/form/radio-button'

describe('RadioButton with default props', () => {
  const defaultComponent = shallow(
    <RadioButton />)

  it('has a default id attributes', () => {
    expect(defaultComponent.find('k-RadioButton')).to.have.length(0)
    expect(defaultComponent).not.to.have.attr(' ')
    expect(defaultComponent).not.to.have.attr('contentLarge')
  })

  it('has a default input attributes', () => {
    const input = defaultComponent.find('input')

    expect(input.find('.karl-radio-button-1')).to.have.length(0)
    expect(input).attr('name')
    expect(input).attr('value')
    expect(input).not.to.have.attr('checked')
    expect(input).not.to.have.attr('disabled')
  })

  it('has a default label attributes', () => {
    const label = defaultComponent.find('label')

    expect(label).not.to.have.attr('large')
    expect(label).not.to.have.attr('text')
  })


  describe('<RadioButton />', () => {
    const component = shallow(
      <RadioButton id="karl-radio-button-1"
                   text="Default"
                   name="karl-radio-button"
                   value="input"
                   content=" "
                   large="false"
                   contentLarge="false" />
    )

    it('has a <div class="k-RadioButton" />', () => {
      expect(component).to.have.tagName('div')
      expect(component).to.have.className('k-RadioButton')
    })

    it('renders input', () => {
      const input = component.find('input')

      expect(input).to.have.attr('id', 'karl-radio-button-1')
      expect(input).to.have.attr('type', 'radio')
      expect(input).to.have.attr('name', 'karl-radio-button')
      expect(input).to.have.attr('value', 'input')
      expect(input).to.have.className('k-RadioButton__input')
    })

    it('renders label', () => {
      const label = component.find('label')

      expect(label).to.have.attr('for', 'karl-radio-button-1')
      expect(label).to.have.className('k-RadioButton__label')
      expect(label).to.have.text('Default')
    })

    describe('checked', () => {
      const component = shallow(
        <RadioButton checked="true" />
      )

      it('has a checked attribute', () => {
        const input = component.find('input')
        expect(input).to.have.attr('checked')
      })
    })

    describe('disabled', () => {
      const component = shallow(
        <RadioButton disabled="true" />
      )

      it('has a disabled attribute', () => {
        const input = component.find('input')
        expect(input).to.have.attr('disabled')
      })
    })

    describe('large', () => {
      const componentLarge = shallow(
        <RadioButton large="true" />
      )

      it('has a large class', () => {
        const label = componentLarge.find('label')

        expect(label).to.have.className("k-RadioButton__label--large")
      })
    })

    describe('with content', () => {
      const componentWithContent = shallow(
        <RadioButton content="Harum trium …"
                     contentLarge="true" />
      )

      it('has a content class', () => {
        const content = componentWithContent.find('.k-RadioButton__labelContents')

        expect(content).to.have.text("Harum trium …")
        expect(content).to.have.className("k-RadioButton__labelContents--large")
      })
    })
  })
})
