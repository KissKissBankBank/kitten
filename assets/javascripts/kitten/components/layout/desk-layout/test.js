import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { DeskLayout } from './index'

describe('<DeskLayout />', () => {
  let component

  describe('compare with snapshot', () => {
    beforeEach(() => {
      component = renderer
        .create(<DeskLayout menu={<p>Hello</p>}>Content</DeskLayout>)
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
          <DeskLayout loading menu={<p>Hello</p>}>
            Content
          </DeskLayout>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
