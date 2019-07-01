import React from 'react'
import renderer from 'react-test-renderer'
import { DonationCard } from './index'

const createMockMediaMatcher = matches => () => ({
  matches,
  addListener: () => {},
  removeListener: () => {},
})

describe('<DonationCard />', () => {
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
        <DonationCard
          title="Custom title mount"
          titleTag="Custom title tag"
          isDisabled
          version="default"
          donationForm={{
            buttonLabel: 'To contribute',
            inputId: 'donation-amount',
            inputLabel: 'Enter your amount',
            inputPlaceholder: 'Your amount',
            inputUnit: '€',
          }}
        />,
      )
      .toJSON()

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
