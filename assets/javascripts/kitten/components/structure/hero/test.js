import React from 'react'
import { Hero } from './index'
import { Container } from '../../layout/container'
import renderer from 'react-test-renderer'

describe('<Hero />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = renderer.create(<Hero>FooBar</Hero>).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
