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
    expect(component.find('label')).to.have.length(1)
    expect(component.find('label')).to.have.attr('for', 'textarea-with-counter-test')
  })

  it('has a textarea', () => {
    expect(component.find('textarea')).to.have.length(1)
    expect(component.find('textarea')).to.have.id('textarea-with-counter-test')
  })

  it('has a counter', () => {
    expect(component.find('span').text()).to.be.equal('1000')
  })

  it('update characters remaining when input value changes', () => {
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
