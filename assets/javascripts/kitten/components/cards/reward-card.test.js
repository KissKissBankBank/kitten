import React from 'react'
import renderer from 'react-test-renderer'
import { RewardCard } from 'kitten/components/cards/reward-card'

const createMockMediaMatcher = matches => () => ({
  matches,
  addListener: () => {},
  removeListener: () => {},
})

describe('<RewardCard />', () => {
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
        <RewardCard
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
          <RewardCard
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
