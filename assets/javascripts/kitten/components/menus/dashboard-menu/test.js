import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { DashboardMenu } from './index'

describe('<DashboardMenu />', () => {
  let component

  describe('with default props', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <DashboardMenu>
            <DashboardMenu.Item
              href="#"
              icon={() => (
                <svg>
                  <d />
                </svg>
              )}
            >
              First item
            </DashboardMenu.Item>
            <DashboardMenu.Item
              href="#"
              isActive
              icon={() => (
                <svg>
                  <d />
                </svg>
              )}
            >
              Second item
            </DashboardMenu.Item>
            <DashboardMenu.Expandable
              title="Expandable item"
              icon={() => (
                <svg>
                  <d />
                </svg>
              )}
            >
              <DashboardMenu.Item href="#">First subitem</DashboardMenu.Item>
              <DashboardMenu.Item href="#" isActive>
                second subitem
              </DashboardMenu.Item>
            </DashboardMenu.Expandable>
          </DashboardMenu>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
