import React from 'react'
import renderer from 'react-test-renderer'
import { ContributionCard } from 'kitten/components/cards/contribution-card'

const createMockMediaMatcher = matches => () => ({
  matches,
  addListener: () => {},
  removeListener: () => {},
})

describe('<ContributionCard />', () => {
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

    const component = renderer.create(<ContributionCard />).toJSON()

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with some props', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <ContributionCard
            titleAmount="Custom title mount"
            imageProps={{
              src: '#image',
              alt: 'Image alt',
            }}
            titleDescription="Custom title description"
            textDescription="Custom text description"
            titleContributors="Custom title contributors"
            textContributors="Custom text contributors"
            titleDelivery="Custom title delivery"
            textDelivery="Custom text delivery"
            titleAvailability="Custom title availability"
            textAvailability="Custom text availability"
            valueContributors="Custom value contributors"
            valueDelivery="Custom value delivery"
            valueAvailability="Custom value availability"
            button="Custom text button"
            myContribution="Custom my contribution"
            manageContribution="Custom manage contribution"
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
