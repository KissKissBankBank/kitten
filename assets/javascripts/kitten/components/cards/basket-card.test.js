import React from 'react'
import renderer from 'react-test-renderer'
import { BasketCard } from 'kitten/components/cards/basket-card'

const createMockMediaMatcher = matches => () => ({
  matches,
  addListener: () => {},
  removeListener: () => {},
})

describe('<BasketCard />', () => {
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
        <BasketCard
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
          <BasketCard
            itleAmount="Custom title amount"
            textDescription="Custom text description"
            titleTag="Custom title tag"
            subtitle="Custom subtitle"
            titleBottom="Custom title bottom"
            valueBottom="Custom value bottom"
            manageLinkBottom="Custom manage link bottom"
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
