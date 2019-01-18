import React from 'react'
import sinon from 'sinon'
import { SelectWithState } from '../../components/form/select-with-state'
import Select from 'react-select'

describe('<SelectWithState />', () => {
  let select
  const sandbox = sinon.createSandbox()
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
      select = mount(<SelectWithState options={options} />)
    })

    it('renders a <Select />', () => {
      expect(select.find(Select).exists()).toBe(true)
    })

    it('has `.k-Select` class', () => {
      expect(select.render().hasClass('k-Select')).toBe(true)
    })

    it('has a good props', () => {
      expect(select.props()).toMatchObject({
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
      })

      expect(select.props().onChange).toBeTruthy()
      expect(select.props().onInputChange).toBeTruthy()
      expect(select.props().inputProps).toBeTruthy()
    })

    it('has a good options', () => {
      expect(select.props().options).toBe(options)
    })
  })

  describe('with default value', () => {
    beforeAll(() => {
      select = mount(<SelectWithState options={options} value={defaultValue} />)
    })

    it('has value prop in state', () => {
      expect(select.state().value).toBe(defaultValue)
    })
  })

  describe('with label', () => {
    beforeAll(() => {
      select = mount(<SelectWithState options={options} labelText="FooBar" />)
    })

    it('renders a label with labelText prop', () => {
      expect(select.find('.k-Select__label').text()).toBe('FooBar')
    })
  })

  describe('with classes props', () => {
    beforeAll(() => {
      select = mount(
        <SelectWithState options={options} tiny error valid disabled />,
      )
    })

    it('has all classes', () => {
      expect(select.render().hasClass('k-Select--tiny')).toBe(true)
      expect(select.render().hasClass('is-error')).toBe(true)
      expect(select.render().hasClass('is-valid')).toBe(true)
      expect(select.render().hasClass('is-disabled')).toBe(true)
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
          options={options}
          onChange={onChangeSpy}
          onInputChange={onInputChangeSpy}
        />,
      )

      select.instance().handleChange(defaultValue)
    })

    it('calls onChange prop callback', () => {
      expect(onChangeSpy.calledOnce).toBe(true)
      expect(onChangeSpy.calledWith(defaultValue)).toBe(true)
    })

    it('calls onInputChange prop callback', () => {
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
          options={options}
          onChange={onChangeSpy}
          onInputChange={onInputChangeSpy}
        />,
      )

      select.instance().handleChange(null)
    })

    it('calls onChange prop with empty value', () => {
      expect(onChangeSpy.calledWith(emptyValue)).toBe(true)
    })

    it('calls onInputChange prop with empty value', () => {
      const onInputChangeValue = { value: emptyValue, name: 'foobar' }

      expect(onInputChangeSpy.calledWith(onInputChangeValue)).toBe(true)
    })
  })

  describe('update props', () => {
    it('should update select value on prop change', () => {
      select = mount(<SelectWithState options={options} value="foo" />)
      expect(select.state().value).toBe('foo')
      select.setProps({ value: 'bar' })
      expect(select.state().value).toBe('bar')
    })
  })
})
