import React from 'react'
import sinon from 'sinon'
import { mount } from 'enzyme'
import { SelectWithState } from 'kitten/components/form/select-with-state'
import Select from 'react-select'

describe('<SelectWithState />', () => {
  let select
  const sandbox = sinon.sandbox.create()
  const options = [
    { value: 'foo', label: 'Foo' },
    { value: 'bar', label: 'Bar' },
  ]
  const defaultValue = { value: 'bar', label: 'Bar' }

  afterEach(() => {
    sandbox.restore()
  })

  describe('with default props', () => {
    beforeAll(() => {
      select = mount(
        <SelectWithState options={ options } />
      )
    })

    test('renders a <Select />', () => {
      expect(select).to.have.descendants(Select)
    })

    test('has `.k-Select` class', () => {
      expect(select.hasClass('k-Select')).toBe(true)
    })

    test('has a good props', () => {
      expect(select).to.have.props(
        {
          clearable: false,
          searchable: false,
          deleteRemoves: false,
          multi: false,
          labelText: null,
          error: false,
          valid: false,
          disabled: false,
          tiny: false,
          name: null,
        }
      )

      expect(select).to.have.prop('onChange')
      expect(select).to.have.prop('onInputChange')
      expect(select).to.have.prop('inputProps')
    })

    test('has a good options', () => {
      expect(select).to.have.prop('options', options)
    })
  })

  describe('with default value', () => {
    beforeAll(() => {
      select = mount(
        <SelectWithState
          options={ options }
          value={ defaultValue }
        />
      )
    })

    test('has value prop in state', () => {
      expect(select).to.have.state('value', defaultValue)
    })
  })

  describe('with label', () => {
    beforeAll(() => {
      select = mount(
        <SelectWithState
          options={ options }
          labelText="FooBar"
        />
      )
    })

    test('renders a label with labelText prop', () => {
      expect(select.find('.k-Select__label'))
        .to.have.text('FooBar')
    })
  })

  describe('with classes props', () => {
    beforeAll(() => {
      select = mount(
        <SelectWithState
          options={ options }
          tiny
          error
          valid
          disabled
        />
      )
    })

    test('has all classes', () => {
      expect(select.hasClass('k-Select--tiny')).toBe(true)
      expect(select.hasClass('is-error')).toBe(true)
      expect(select.hasClass('is-valid')).toBe(true)
      expect(select.hasClass('is-disabled')).toBe(true)
    })
  })

  describe('with onChange and onInputChange props', () => {
    let onChangeSpy
    let onInputChangeSpy

    beforeAll(() => {
      onChangeSpy = sandbox.spy()
      onInputChangeSpy = sandbox.spy()
      select = mount(
        <SelectWithState
          name="foobar"
          options={ options }
          onChange={ onChangeSpy }
          onInputChange={ onInputChangeSpy }
        />
      )

      select.instance().handleChange(defaultValue)
    })

    test('calls onChange prop callback', () => {
      expect(onChangeSpy.calledOnce).toBe(true)
      expect(onChangeSpy.calledWith(defaultValue)).toBe(true)
    })

    test('calls onInputChange prop callback', () => {
      const onInputChangeValue = { value: defaultValue, name: 'foobar' }

      expect(onInputChangeSpy.calledOnce).toBe(true)
      expect(onInputChangeSpy.calledWith(onInputChangeValue)).toBe(true)
    })
  })

  describe('simulates remove handlers', () => {
    let onChangeSpy
    let onInputChangeSpy
    let emptyValue

    beforeAll(() => {
      onChangeSpy = sandbox.spy()
      onInputChangeSpy = sandbox.spy()
      emptyValue = { value: null, label: null }
      select = mount(
        <SelectWithState
          name="foobar"
          options={ options }
          onChange={ onChangeSpy }
          onInputChange={ onInputChangeSpy }
        />
      )

      select.instance().handleChange(null)
    })

    test('calls onChange prop with empty value', () => {
      expect(onChangeSpy.calledWith(emptyValue)).toBe(true)
    })

    test('calls onInputChange prop with empty value', () => {
      const onInputChangeValue = { value: emptyValue, name: 'foobar' }

      expect(onInputChangeSpy.calledWith(onInputChangeValue)).toBe(true)
    })
  })
})
