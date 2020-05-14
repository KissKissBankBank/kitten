import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { NavBar } from './index'

describe('<NavBar />', () => {
  let component

  describe('simple NavBar with zIndex set to 105', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <NavBar
            className="customClass"
            listProps={{ className: 'customListClass' }}
            navProps={{ className: 'customNavClass' }}
          >
            <NavBar.ListItem linkProps={{ href: '#1' }} active>
              Item 1
            </NavBar.ListItem>
            <NavBar.ListItem
              className="customItemClass"
              linkProps={{ href: '#2', className: 'customLinkClass' }}
            >
              Item 2
            </NavBar.ListItem>
            <NavBar.ListItem linkProps={{ href: '#3' }}>Item 3</NavBar.ListItem>
            <NavBar.ListItem linkProps={{ href: '#4' }}>Item 4</NavBar.ListItem>
          </NavBar>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
