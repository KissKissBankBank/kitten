import React from 'react'
import renderer from 'react-test-renderer'
import { IconBadge } from 'kitten/components/notifications/icon-badge'

describe('<IconBadge />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = renderer
        .create(<IconBadge children="Custom children" />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
