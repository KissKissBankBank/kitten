import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import RadioButton from 'kitten/components/form/radio-button'

describe('<RadioButton />', () => {
  const component = shallow(
    <RadioButton id="karl-radio-button-1"
                 isChecked="true"
                 disabled="true"
                 text="Default" />
  )

  it('has a <div class="k-RadioButton" />', () => {
    expect(component).to.have.tagName('div')
    expect(component).to.have.className('k-RadioButton')
  })

  it('renders input', () => {
    const input = component.find('input')

    expect(input).to.have.attr('id', 'karl-radio-button-1')
    expect(input).to.have.attr('type', 'radio')
    //expect(input).to.have.attr('name', 'karl-radio-button')
    expect(input).to.have.className('k-RadioButton__input')
    expect(input).to.have.attr('checked')
    expect(input).to.have.attr('disabled')
  })

  it('renders label', () => {
    const label = component.find('label')

    expect(label).to.have.attr('for', 'karl-radio-button-1')
    expect(label).to.have.className('k-RadioButton__label')
    expect(label).to.have.text('Default')
  })

  // it('has a <div class="k-RadioButton__labelContents" />', () => {
  //   const div = component.find('div')

  //   expect(div).to.have.className('k-RadioButton__labelContents')
  //   expect(div).to.have.content('Lorem …')
  // })

  describe('large', () => {
    const componentLarge = shallow(
      <RadioButton large="true" />
    )

    it('has a large class', () => {
      const label = componentLarge.find('label')

      expect(label).to.have.className("k-RadioButton__label--large")
    })
  })

  describe('with content large', () => {
    const componentContentLarge = shallow(
      <RadioButton contentLarge="true" />
    )

    it('has a content large class', () => {
      expect(componentContentLarge).to.have.className(".k-RadioButton__labelContents--large")
    })
  })
})
