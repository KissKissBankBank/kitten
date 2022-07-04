import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { Container } from './index'

describe('<Container />', () => {
  let component

  describe('compare with snapshot', () => {
    beforeEach(() => {
      component = renderer.create(<Container />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
