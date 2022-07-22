import React from 'react'
import renderer from 'react-test-renderer'
import { RichText } from './index'

describe('<RichText />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = renderer.create(<RichText>Lorem ipsun</RichText>).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
