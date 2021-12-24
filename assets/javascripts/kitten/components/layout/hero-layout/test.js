import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { HeroLayout } from './index'

describe('<HeroLayout />', () => {
  let component

  describe('compare with snapshot', () => {
    beforeEach(() => {
      component = renderer
        .create(<HeroLayout menu={<p>Hello</p>}>Content</HeroLayout>)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('compare with loading snapshot', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <HeroLayout loading menu={<p>Hello</p>}>
            Content
          </HeroLayout>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
