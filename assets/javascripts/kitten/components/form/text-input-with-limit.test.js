import React from 'react'
import sinon from 'sinon'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import { TextInput } from 'kitten/components/form/text-input'
import { TextInputWithLimit } from 'kitten/components/form/text-input-with-limit'

describe('<TextInputWithLimit />', () => {
  const sandbox = sinon.sandbox.create()

  afterEach(() => {
    sandbox.restore()
  })

  describe('by default', () => {
    const defaultComponent = shallow(<TextInputWithLimit />)

    it('renders a .k-TextInputLimit', () => {
      expect(defaultComponent.find('.k-TextInputLimit')).to.have.length(1)
    })

    it('renders a .k-TextInputLimit__input', () => {
      expect(defaultComponent.find('.k-TextInputLimit__input')).to.have.length(1)
    })
  })

  describe('defaultValue prop', () => {
    it('when empty it sets the counter to the limit', () => {
      const component = shallow(
        <TextInputWithLimit defaultValue="" limit={ 15 } />
      )
      const counter = component.find('.k-TextInputLimit__counter')
      expect(counter).to.have.text('15')
    })

    it('when set it changes the counter', () => {
      const component = shallow(
        <TextInputWithLimit defaultValue="Test" limit={ 15 } />
      )
      const counter = component.find('.k-TextInputLimit__counter')
      expect(counter).to.have.text('11')
    })

    it('when over the limit it adds an error', () => {
      const component = shallow(
        <TextInputWithLimit defaultValue="Test" limit={ 3 } />
      )
      const counter = component.find('.k-TextInputLimit__counter')
      expect(counter).to.have.text('-1')
      expect(counter).to.have.className('is-error')
    })
  })

  describe('on onChange event', () => {
    it('updates the TextInput value', () => {
      const component = mount(
        <TextInputWithLimit limit={ 15 } />
      )

      const input = component.find('input')
      input.node.value = 'Test'
      input.simulate('change')

      const counter = component.find('.k-TextInputLimit__counter')
      expect(counter).to.have.text('11')
    })
  })

  describe('with onChange prop', () => {
    const handleChange = () => {}
    const onChangeSpy = sandbox.spy(handleChange)
    const component = mount(
      <TextInputWithLimit onChange={ onChangeSpy } />
    )

    before(() => {
      const input = component.find('input')
      input.simulate('change')
    })

    it('calls the onChange prop callback', () => {
      expect(onChangeSpy.calledOnce).to.equal(true)
    })
  })
})
