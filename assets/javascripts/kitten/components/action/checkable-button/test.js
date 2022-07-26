import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { CheckableButton } from './index'

describe('<CheckableButton />', () => {
  let component

  describe('basic', () => {
    beforeEach(() => {
      component = renderer
        .create(<CheckableButton>MyCheckableButton</CheckableButton>)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `small` prop', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <CheckableButton isChecked size="small">
            MyCheckableButton
          </CheckableButton>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `large` prop', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <CheckableButton isChecked size="large">
            MyCheckableButton
          </CheckableButton>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `disabled` prop', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <CheckableButton isChecked disabled>
            MyCheckableButton
          </CheckableButton>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `error` prop', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <CheckableButton isChecked error>
            MyCheckableButton
          </CheckableButton>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
