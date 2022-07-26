import React from 'react'
import renderer from 'react-test-renderer'
import { SummaryCard } from './index'

describe('<SummaryCard />', () => {
  let component

  describe('default', () => {
    component = renderer
      .create(
        <SummaryCard
          actionProps={{
            'aria-label': 'Click to show item',
            as: 'a',
            href: 'https://css-tricks.com',
            onClick: () => {},
          }}
        >
          <SummaryCard.Image>
            <img src="/kitten.jpg" alt="" />
          </SummaryCard.Image>

          <SummaryCard.Cell name="title">
            Stickers Free Boobs Club
          </SummaryCard.Cell>

          <SummaryCard.Cell name="amount">10 000€</SummaryCard.Cell>
        </SummaryCard>,
      )
      .toJSON()

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
