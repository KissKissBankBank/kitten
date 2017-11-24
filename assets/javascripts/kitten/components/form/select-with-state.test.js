import React from 'react'
import sinon from 'sinon'
import { expect } from 'chai'
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
    before(() => {
      select = mount(
        <SelectWithState options={ options } />
      )
    })

    it('renders a <Select />', () => {
      expect(select).to.have.descendants(Select)
    })

    it('has `.k-Select` class', () => {
      expect(select).to.have.className('k-Select')
    })

    it('has a good props', () => {
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

    it('has a good options', () => {
      expect(select).to.have.prop('options', options)
    })
  })

  describe('with default value', () => {
    before(() => {
      select = mount(
        <SelectWithState
          options={ options }
          value={ defaultValue }
        />
      )
    })

    it('has value prop in state', () => {
      expect(select).to.have.state('value', defaultValue)
    })
  })

  describe('with label', () => {
    before(() => {
      select = mount(
        <SelectWithState
          options={ options }
          labelText="FooBar"
        />
      )
    })

    it('renders a label with labelText prop', () => {
      expect(select.find('.k-Select__label'))
        .to.have.text('FooBar')
    })
  })

  describe('with classes props', () => {
    before(() => {
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

    it('has all classes', () => {
      expect(select).to.have.className('k-Select--tiny')
      expect(select).to.have.className('is-error')
      expect(select).to.have.className('is-valid')
      expect(select).to.have.className('is-disabled')
    })
  })

  describe('with onChange and onInputChange props', () => {
    let onChangeSpy
    let onInputChangeSpy

    before(() => {
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

    it('calls onChange prop callback', () => {
      expect(onChangeSpy.calledOnce).to.equal(true)
      expect(onChangeSpy.calledWith(defaultValue)).to.equal(true)
    })

    it('calls onInputChange prop callback', () => {
      const onInputChangeValue = { value: defaultValue, name: 'foobar' }

      expect(onInputChangeSpy.calledOnce).to.equal(true)
      expect(onInputChangeSpy.calledWith(onInputChangeValue)).to.equal(true)
    })
  })

  describe('simulates remove handlers', () => {
    let onChangeSpy
    let onInputChangeSpy
    let emptyValue

    before(() => {
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

      select.instance().handleChange([])
    })

    it('calls onChange prop with empty value', () => {
      expect(onChangeSpy.calledWith(emptyValue)).to.equal(true)
    })

    it('calls onInputChange prop with empty value', () => {
      const onInputChangeValue = { value: emptyValue, name: 'foobar' }

      expect(onInputChangeSpy.calledWith(onInputChangeValue)).to.equal(true)
    })
  })
})
