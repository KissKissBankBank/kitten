import React from 'react'
import renderer from 'react-test-renderer'
import { ManagerCard } from './index'

describe('<ManagerCard />', () => {
  let component

  describe('Default', () => {
    component = renderer
      .create(
        <ManagerCard
          actionProps={{
            'aria-label': 'Click to show item',
            as: 'a',
            href: 'https://css-tricks.com',
            onClick: () => {},
          }}
        >
          <ManagerCard.Cell>
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
            nibh, ut fermentum massa justo sit amet risus.
          </ManagerCard.Cell>
          <ManagerCard.LastCell>•••</ManagerCard.LastCell>
        </ManagerCard>,
      )
      .toJSON()

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
