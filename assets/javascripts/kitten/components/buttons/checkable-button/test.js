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

  describe('with `tiny` prop', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <CheckableButton isChecked size="tiny">
            MyCheckableButton
          </CheckableButton>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `big` prop', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <CheckableButton isChecked size="big">
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
