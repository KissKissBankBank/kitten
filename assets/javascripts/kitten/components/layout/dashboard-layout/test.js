import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import '../../../config/__mocks__/matchMediaMock.js'

import { DashboardLayout } from './index'

describe('<DashboardLayout />', () => {
  let component

  describe('with default props', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <DashboardLayout
            backLinkProps={{
              href: '#',
              children: 'Custom backLink text',
            }}
            buttonProps={{
              openLabel: 'Custom open label',
              closeLabel: 'Custom close label',
            }}
            quickAccessLinkText="Custom quick access link text"
          >
            <DashboardLayout.Header>Header content</DashboardLayout.Header>
            <DashboardLayout.SideContent>
              Side content
            </DashboardLayout.SideContent>
            <DashboardLayout.SideFooter>Side footer</DashboardLayout.SideFooter>

            <p>Main content</p>
          </DashboardLayout>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
