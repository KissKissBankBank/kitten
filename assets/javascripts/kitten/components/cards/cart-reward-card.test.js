import React from 'react'
import renderer from 'react-test-renderer'
import { CartRewardCard } from '../../components/cards/cart-reward-card'

const createMockMediaMatcher = matches => () => ({
  matches,
  addListener: () => {},
  removeListener: () => {},
})

describe('<CartRewardCard />', () => {
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
        <CartRewardCard
          titleAmount="Custom title amount"
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
          <CartRewardCard
            titleAmount="Custom title amount"
            textDescription="Custom text description"
            titleTag="Custom title tag"
            subtitle="Custom subtitle"
            updateAmountTitle="Custom amount"
            updateAmountLink="Custom amount link"
          >
            <CartRewardCard.Information
              title="Custom shipping title"
              value="Custom shipping value"
            />
          </CartRewardCard>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
