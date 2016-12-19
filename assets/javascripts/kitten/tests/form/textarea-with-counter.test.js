import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import TextareaWithCounter from '../../components/form/textarea-with-counter'

const component = mount(
  <TextareaWithCounter
    id="textarea-with-counter-test"
    label="Ma description"
    rows="5"
    placeholder="Description sommaire du créateur"
    limit="1000" />
)

describe('<TextareaWithCounter />', () => {

  it('has a label with attribute `for`', () => {
    const label = component.find('label')

    expect(label).to.have.length(1)
    expect(label).to.have.attr('for', 'textarea-with-counter-test')
  })

  it('has a textarea with attributes', () => {
    const textarea = component.find('textarea')

    expect(textarea).to.have.length(1)
    expect(textarea).to.have.id('textarea-with-counter-test')
    expect(textarea).to.have.attr('rows', '5')
    expect(textarea).to.have.attr('maxLength', '1000')
    expect(textarea).to.have.attr('placeholder', 'Description sommaire du créateur')
  })

  it('has a counter', () => {
    const counter = component.find('.k-TextareaWithCounter__counter')

    expect(counter.text()).to.be.equal('1000')
  })

  it('update characters remaining when value changes', () => {
    const textarea = component.ref('textareaWithCounter')
    const value = 'Ceci est ma description !'
    const counter = 1000 - value.length

    // Change value.
    textarea.node.value = value
    textarea.simulate('change')

    // Test new counter.
    expect(component.find('.k-TextareaWithCounter__counter').text())
      .to.be.equal(counter.toString())
  })
})
