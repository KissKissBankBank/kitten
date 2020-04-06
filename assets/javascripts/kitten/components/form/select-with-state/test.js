import React from 'react'
import renderer from 'react-test-renderer'
import { SelectWithState } from './index'

describe('<SelectWithState />', () => {
  let select
  const options = [
    { value: 'foo', label: 'Foo' },
    { value: 'bar', label: 'Bar' },
  ]
  const defaultValue = { value: 'bar', label: 'Bar' }

  describe('with default props', () => {
    beforeAll(() => {
      select = renderer.create(<SelectWithState options={options} />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(select).toMatchSnapshot()
    })
  })

  describe('with default value', () => {
    beforeAll(() => {
      select = renderer
        .create(<SelectWithState options={options} value={defaultValue} />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(select).toMatchSnapshot()
    })
  })

  describe('with label', () => {
    beforeAll(() => {
      select = renderer
        .create(<SelectWithState options={options} labelText="FooBar" />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(select).toMatchSnapshot()
    })
  })

  describe('with classes props', () => {
    beforeAll(() => {
      select = renderer
        .create(<SelectWithState options={options} tiny error valid disabled />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(select).toMatchSnapshot()
    })
  })
})
