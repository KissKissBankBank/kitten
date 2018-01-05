import React from 'react'
import sinon from 'sinon'
import { shallow, mount } from 'enzyme'
import { TextInput } from 'kitten/components/form/text-input'
import { TextInputWithLimit }
  from 'kitten/components/form/text-input-with-limit'

describe('<TextInputWithLimit />', () => {
  const sandbox = sinon.sandbox.create()

  afterEach(() => {
    sandbox.restore()
  })

  describe('by default', () => {
    const defaultComponent = shallow(<TextInputWithLimit />)

    test('renders a .k-TextInputLimit', () => {
      expect(defaultComponent.find('.k-TextInputLimit')).toHaveLength(1)
    })

    test('renders a .k-TextInputLimit__input', () => {
      expect(defaultComponent.find('.k-TextInputLimit__input')).toHaveLength(1)
    })
  })

  describe('defaultValue prop', () => {
    test('sets the counter to the limit when empty', () => {
      const component = shallow(
        <TextInputWithLimit defaultValue="" limit={ 15 } />
      )
      const counter = component.find('.k-TextInputLimit__counter')
      expect(counter).to.have.text('15')
    })

    test('changes the counter when set', () => {
      const component = shallow(
        <TextInputWithLimit defaultValue="Test" limit={ 15 } />
      )
      const counter = component.find('.k-TextInputLimit__counter')
      expect(counter).to.have.text('11')
    })

    test('adds an error when over the limit', () => {
      const component = shallow(
        <TextInputWithLimit defaultValue="Test" limit={ 3 } />
      )
      const counter = component.find('.k-TextInputLimit__counter')
      expect(counter).to.have.text('-1')
      expect(counter.hasClass('is-error')).toBe(true)
    })
  })

  describe('disabled prop', () => {
    const component = shallow(
      <TextInputWithLimit disabled />
    )

    test('is disabled', () => {
      expect(component.hasClass('is-disabled')).toBe(true)
      expect(component.find('TextInput')).to.have.attr('disabled')
    })
  })

  describe('on onChange event', () => {
    test('updates the TextInput value', () => {
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

    beforeAll(() => {
      const input = component.find('input')
      input.simulate('change')
    })

    test('calls the onChange prop callback', () => {
      expect(onChangeSpy.calledOnce).toBe(true)
    })
  })
})
