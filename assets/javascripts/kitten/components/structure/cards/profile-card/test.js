import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { ProfileCard } from './index'

describe('<ProfileCard />', () => {
  let component

  describe('with default props', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <ProfileCard>
            <ProfileCard.Avatar imageProps={{ alt: '', src: `/kitten.jpg` }} />
            <ProfileCard.Content>
              Hello world
            </ProfileCard.Content>
            <ProfileCard.Action>
              Action
            </ProfileCard.Action>
          </ProfileCard>
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
