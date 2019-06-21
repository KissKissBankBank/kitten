import React from 'react'
import renderer from 'react-test-renderer'
import { TextInputWithLimit } from './index'

describe('<TextInputWithLimit />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = renderer.create(<TextInputWithLimit />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
