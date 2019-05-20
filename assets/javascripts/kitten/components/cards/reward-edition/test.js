import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { RewardEdition } from './index'

describe('<RewardEdition />', () => {
  let component

  describe('with some props', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <RewardEdition>
            <RewardEdition.Header>Header</RewardEdition.Header>
            <RewardEdition.Content>Content</RewardEdition.Content>
          </RewardEdition>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
