import React from 'react'
import renderer from 'react-test-renderer'
import { PeopleCard } from './index'
import { AvatarWithTextAndBadge } from '../../../information/avatar-with-text-and-badge'

describe('<PeopleCard />', () => {
  let component

  describe('default', () => {
    component = renderer
      .create(
        <PeopleCard>
          <PeopleCard.Avatar>
            <AvatarWithTextAndBadge>
              <AvatarWithTextAndBadge.Image alt="" src="/kitten-0.jpg" />
            </AvatarWithTextAndBadge>
          </PeopleCard.Avatar>
          <PeopleCard.Cell>
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
            nibh, ut fermentum massa justo sit amet risus.
          </PeopleCard.Cell>
          <PeopleCard.LastCell>•••</PeopleCard.LastCell>
        </PeopleCard>,
      )
      .toJSON()

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
