import React from 'react'
import renderer from 'react-test-renderer'
import { DonationCard } from 'kitten/components/cards/donation-card'

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
          titleAmount="Custom title mount"
          textDescription="Custom text description"
        />,
      )
      .toJSON()

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with some props', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <DonationCard
            titleAmount="Custom title mount"
            imageProps={{
              src: '#image',
              alt: 'Image alt',
            }}
            textDescription="Custom text description"
            button="Custom text button"
            myContribution="Custom my contribution"
            manageContribution="Custom manage contribution"
            manageContributionLink="Custom manage link contribution"
            renderAmountInput={() => <div>Custom function</div>}
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
