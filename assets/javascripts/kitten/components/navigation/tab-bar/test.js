import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { TabBar } from './next'

describe('<TabBar />', () => {
  let component

  describe('simple TabBar with zIndex set to 105', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <TabBar
            className="customClass"
            listProps={{ className: 'customListClass' }}
            navProps={{ className: 'customNavClass' }}
          >
            <TabBar.ListItem linkProps={{ href: '#1' }} active>
              Item 1
            </TabBar.ListItem>
            <TabBar.ListItem
              className="customItemClass"
              linkProps={{ href: '#2', className: 'customLinkClass' }}
            >
              Item 2
            </TabBar.ListItem>
            <TabBar.ListItem linkProps={{ href: '#3' }}>Item 3</TabBar.ListItem>
            <TabBar.ListItem linkProps={{ href: '#4' }}>Item 4</TabBar.ListItem>
          </TabBar>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
