import React from 'react'
import renderer from 'react-test-renderer'
import { DevGrid } from './index'

describe('<DevGrid />', () => {
  let component

  describe('with default props', () => {
    beforeEach(() => {
      component = renderer.create(<DevGrid visible />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
