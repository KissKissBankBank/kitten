import React from 'react'
import { SideLayout } from './index'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

describe('<SideLayout />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = renderer
        .create(<SideLayout className="ClassName">Foobar</SideLayout>)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with sidebar prop', () => {
    beforeEach(() => {
      component = renderer
        .create(<SideLayout sidebar="Sidebar content">Foobar</SideLayout>)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
