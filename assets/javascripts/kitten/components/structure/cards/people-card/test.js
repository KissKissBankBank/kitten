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
          <PeopleCard.Image />
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

  describe('With peopleAvatar prop', () => {
    component = renderer
      .create(
        <PeopleCard>
          <PeopleCard.Image peopleAvatar />
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
