import React from 'react'
import renderer from 'react-test-renderer'
import { TextInputWithUnitForm } from './index'

describe('<TextInputWithUnitForm />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <TextInputWithUnitForm
            buttonLabel="To contribute"
            inputId="donation-amount"
            inputLabel="Enter your amount"
            inputPlaceholder="Your amount"
            inputUnit="€"
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with error prop', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <TextInputWithUnitForm
            inputIsOnError
            errorMessage="Error message…"
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with disabled prop', () => {
    beforeEach(() => {
      component = renderer
        .create(<TextInputWithUnitForm formIsDisabled />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with align prop', () => {
    beforeEach(() => {
      component = renderer
        .create(<TextInputWithUnitForm align="center" />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
