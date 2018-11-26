import React from 'react'
import renderer from 'react-test-renderer'
import { RewardCard } from '../../components/cards/reward-card'

const createMockMediaMatcher = matches => () => ({
  matches,
  addListener: () => {},
  removeListener: () => {},
})

describe('<RewardCard />', () => {
  let originalMatchMedia

  beforeEach(() => {
    originalMatchMedia = window.matchMedia
  })

  afterEach(() => {
    window.matchMedia = originalMatchMedia
  })

  describe('by default', () => {
    it('matches with snapshot', () => {
      window.matchMedia = createMockMediaMatcher(false)
      const component = renderer
        .create(
          <RewardCard
            titleAmount="Custom title mount"
            textDescription="Custom text description"
          />,
        )
        .toJSON()
      expect(component).toMatchSnapshot()
    })
  })

  describe('with all props', () => {
    it('matches with snapshot', () => {
      window.matchMedia = createMockMediaMatcher(false)
      const component = renderer
        .create(
          <RewardCard
            titleAmount="Custom title amount"
            titleTag="h4"
            subtitle="Custom title description"
            subtitleTag="quote"
            description="Custom text description"
            manageContributionDescription="Custom my contribution"
            manageContributionLinkLabel="Custom manage contribution"
            manageContributionLinkHref="Custom manage link contribution"
            buttonLabel="Custom text button"
            imageProps={{
              src: '#image',
            }}
            infos={[
              { label: 'Delivery', value: '03/18' },
              { label: 'Alice', value: 'Wonderland' },
            ]}
            starred
            starLabel="Youpi"
          />,
        )
        .toJSON()
      expect(component).toMatchSnapshot()
    })
  })

  describe('on tiny version', () => {
    it('matches with snapshot', () => {
      window.matchMedia = createMockMediaMatcher(false)
      const component = renderer
        .create(
          <RewardCard
            titleAmount="Custom title amount"
            titleTag="h4"
            subtitle="Custom title description"
            subtitleTag="quote"
            description="Custom text description"
            manageContributionDescription="Custom my contribution"
            manageContributionLinkLabel="Custom manage contribution"
            manageContributionLinkHref="Custom manage link contribution"
            buttonLabel="Custom text button"
            imageProps={{
              src: '#image',
              alt: 'Image alt',
            }}
            infos={[
              { label: 'Delivery', value: '03/18' },
              { label: 'Alice', value: 'Wonderland' },
            ]}
            starred
            starLabel="Youpi"
            version="tiny"
          />,
        )
        .toJSON()
      expect(component).toMatchSnapshot()
    })
  })

  describe('with legacy props', () => {
    it('matches with snapshot', () => {
      window.matchMedia = createMockMediaMatcher(false)
      const component = renderer
        .create(
          <RewardCard
            titleAmount="Custom title amount"
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
      expect(component).toMatchSnapshot()
    })
  })
})
