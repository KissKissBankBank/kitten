import React from 'react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, color } from '@storybook/addon-knobs'
import { NavBar } from './index'
import { ScrollableContainer } from '../../../components/grid/scrollable-container'
import COLORS from '../../../constants/colors-config'

export default {
  component: NavBar,
  title: 'Navigation/NavBar',
  decorators: [withInfo, withKnobs],
  parameters: {
    component: NavBar,
    info: info,
  },
}

const info = {
  text: `
    #NavBar
    &nbsp;

    ## Import
    ~~~js
    import { NavBar } from '@kisskissbankbank/kitten/src/components/navigation/nav-bar'
    ~~~

    ## Usage
    &nbsp;

    #### Default
    ~~~js
      <NavBar>
        <NavBar.ListItem linkProps={{ href: '#1'}} active>
          Item 1
        </NavBar.ListItem>
        <NavBar.ListItem linkProps={{ href: '#2'}}>
          Item 2
        </NavBar.ListItem>
        <NavBar.ListItem linkProps={{ href: '#3'}}>
          Item 3
        </NavBar.ListItem>
        <NavBar.ListItem linkProps={{ href: '#4'}}>
          Item 4
        </NavBar.ListItem>
      </NavBar>
    ~~~
    &nbsp;
    #### With custom colors
    ~~~js
      <NavBar
        colors={{
          background: '#fff',
          link: '#00f',
          border: 'transparent',
          activeLink: '#808',
          activeBorder: 'rgba(128,0,128,.5)',
        }}>
        <NavBar.ListItem linkProps={{ href: '#1'}} active>
          Item 1
        </NavBar.ListItem>
        <NavBar.ListItem linkProps={{ href: '#2'}}>
          Item 2
        </NavBar.ListItem>
        <NavBar.ListItem linkProps={{ href: '#3'}}>
          Item 3
        </NavBar.ListItem>
        <NavBar.ListItem linkProps={{ href: '#4'}}>
          Item 4
        </NavBar.ListItem>
      </NavBar>
    ~~~
  `,
  header: false,
  propTables: false,
}

export const Default = () => (
  <NavBar
    colors={{
      background: color('Background', COLORS.primary6),
      link: color('Link', COLORS.font1),
      border: color('Border', 'rgba(0,0,0,0)'),
      activeLink: color('ActiveLink', COLORS.primary1),
      activeBorder: color('ActiveBorder', COLORS.primary1),
    }}
  >
    <NavBar.ListItem linkProps={{ href: '#1' }} active>
      Item 1
    </NavBar.ListItem>
    <NavBar.ListItem linkProps={{ href: '#2' }}>Item 2</NavBar.ListItem>
    <NavBar.ListItem linkProps={{ href: '#3' }}>Item 3</NavBar.ListItem>
    <NavBar.ListItem linkProps={{ href: '#4' }}>Item 4</NavBar.ListItem>
  </NavBar>
)

export const NestedInsideScrollableContainer = () => (
  <ScrollableContainer>
    <Default />
  </ScrollableContainer>
)
