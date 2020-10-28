import React from 'react'
import renderer from 'react-test-renderer'
import { ContributionCard } from '../../../components/cards/contribution-card'

const createMockMediaMatcher = matches => () => ({
  matches,
  addListener: () => {},
  removeListener: () => {},
})

describe('<ContributionCard />', () => {
  let originalMatchMedia
  let component

  // Desactivate warnings.
  jest.spyOn(global.console, 'error').mockImplementation(() => {})

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
        <ContributionCard
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
          <ContributionCard
            titleAmount="Custom title mount"
            imageProps={{
              src: '#image',
              alt: 'Image alt',
            }}
            titleDescription="Custom title description"
            textDescription="Custom text description"
            titleContributors="Custom title contributors"
            titleDelivery="Custom title delivery"
            titleAvailability="Custom title availability"
            valueContributors="Custom value contributors"
            valueDelivery="Custom value delivery"
            valueAvailability="Custom value availability"
            button="Custom text button"
            myContribution="Custom my contribution"
            manageContribution="Custom manage contribution"
            manageContributionLink="Custom manage link contribution"
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with tiny version', () => {
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
            titleDelivery="Custom title delivery"
            titleAvailability="Custom title availability"
            valueContributors="Custom value contributors"
            valueDelivery="Custom value delivery"
            valueAvailability="Custom value availability"
            button="Custom text button"
            myContribution="Custom my contribution"
            manageContribution="Custom manage contribution"
            manageContributionLink="Custom manage link contribution"
            version="tiny"
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
