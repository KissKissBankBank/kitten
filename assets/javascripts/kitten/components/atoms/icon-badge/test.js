import React from 'react'
import renderer from 'react-test-renderer'
import { IconBadge } from './index'

describe('<IconBadge />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = renderer
        .create(<IconBadge children="Custom children" valid size="big" />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
