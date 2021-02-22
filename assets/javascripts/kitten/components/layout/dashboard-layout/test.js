import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import '../../../helpers/utils/use-media-query/matchMedia.mock'

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

  describe('<DefaultLayout.Flow />', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <DashboardLayout.Flow>
            <DashboardLayout.Flow.Content>
              Main flow content
            </DashboardLayout.Flow.Content>
            <DashboardLayout.Flow.Aside
              mobileAsideProps={{
                openLabel: 'Open help',
                closeLabel: 'Close help',
              }}
            >
              <DashboardLayout.Flow.AsideCard>
                Side content in a card
              </DashboardLayout.Flow.AsideCard>
            </DashboardLayout.Flow.Aside>
            <DashboardLayout.Flow.Nav>
              <button>Back</button>

              <button>Save</button>
            </DashboardLayout.Flow.Nav>
          </DashboardLayout.Flow>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('<DefaultLayout.Flow loading />', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <DashboardLayout.Flow>
            <DashboardLayout.Flow.Content>
              Main flow content
            </DashboardLayout.Flow.Content>
            <DashboardLayout.Flow.Aside
              mobileAsideProps={{
                openLabel: 'Open help',
                closeLabel: 'Close help',
              }}
            >
              <DashboardLayout.Flow.AsideCard>
                Side content in a card
              </DashboardLayout.Flow.AsideCard>
            </DashboardLayout.Flow.Aside>
            <DashboardLayout.Flow.Nav>
              <button>Back</button>

              <button>Save</button>
            </DashboardLayout.Flow.Nav>
          </DashboardLayout.Flow>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
