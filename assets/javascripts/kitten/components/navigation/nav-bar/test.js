import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { NavBar } from './index'

describe('<NavBar />', () => {
  let component

  describe('simple NavBar', () => {
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
  describe('NavBar with `colors` prop', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <NavBar
            className="customClass"
            listProps={{ className: 'customListClass' }}
            navProps={{ className: 'customNavClass' }}
            colors={{
              background: '#fff',
              link: '#00f',
              border: 'transparent',
              activeLink: '#808',
              activeBorder: 'rgba(128,0,128,.5)',
            }}
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
