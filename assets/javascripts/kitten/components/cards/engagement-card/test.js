import React from 'react'
import renderer from 'react-test-renderer'
import { EngagementCard } from './index'

describe('<EngagementCard />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <EngagementCard
            categorie="Custom categorie"
            imageSrc="url …"
            textColor="font1"
            href="#"
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
