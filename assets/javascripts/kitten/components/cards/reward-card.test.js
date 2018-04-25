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

  beforeEach(() => {
    originalMatchMedia = window.matchMedia
  })

  afterEach(() => {
    window.matchMedia = originalMatchMedia
  })

  describe('by default', () => {
    window.matchMedia = createMockMediaMatcher(false)

    const rewardCard = renderer.create(<RewardCard />).toJSON()

    it('matches with snapshot', () => {
      expect(rewardCard).toMatchSnapshot()
    })
  })
})
