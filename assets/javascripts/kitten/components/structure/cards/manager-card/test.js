import React from 'react'
import renderer from 'react-test-renderer'
import { ManagerCard } from './index'
import { AvatarWithTextAndBadge } from '../../../information/avatar-with-text-and-badge'

describe('<ManagerCard />', () => {
  let component

  describe('default', () => {
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

  describe('with avatar', () => {
    component = renderer
      .create(
        <ManagerCard>
          <ManagerCard.Image>
            <AvatarWithTextAndBadge>
              <AvatarWithTextAndBadge.Image alt="" src="/kitten-0.jpg" />
            </AvatarWithTextAndBadge>
          </ManagerCard.Image>
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
