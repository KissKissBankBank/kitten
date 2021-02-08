import React from 'react'
import renderer from 'react-test-renderer'
import { SupTitle } from './index'

describe('<SupTitle />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <SupTitle>
            Lorem ipsun
          </SupTitle>
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
