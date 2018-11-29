import React from 'react'
import renderer from 'react-test-renderer'
import { TextInputWithUnitForm } from '../../components/form/text-input-with-unit-form'

const createMockMediaMatcher = matches => () => ({
  matches,
  addListener: () => {},
  removeListener: () => {},
})

describe('<TextInputWithUnitForm />', () => {
  let originalMatchMedia
  let component

  beforeEach(() => {
    originalMatchMedia = window.matchMedia
  })

  afterEach(() => {
    window.matchMedia = originalMatchMedia
  })

  describe('by default', () => {
    window.matchMedia = createMockMediaMatcher(false)

    const component = renderer
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

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('on error', () => {
    window.matchMedia = createMockMediaMatcher(false)

    const component = renderer
      .create(
        <TextInputWithUnitForm
          buttonLabel="To contribute"
          inputId="donation-amount"
          inputLabel="Enter your amount"
          inputPlaceholder="Your amount"
          inputUnit="€"
          inputIsOnError
          errorMessage="lorem ipsum dolor sit amet consectetur."
        />,
      )
      .toJSON()

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('disabled', () => {
    window.matchMedia = createMockMediaMatcher(false)

    const component = renderer
      .create(
        <TextInputWithUnitForm
          buttonLabel="To contribute"
          inputId="donation-amount"
          inputLabel="Enter your amount"
          inputPlaceholder="Your amount"
          inputUnit="€"
          formIsDisabled
        />,
      )
      .toJSON()

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
