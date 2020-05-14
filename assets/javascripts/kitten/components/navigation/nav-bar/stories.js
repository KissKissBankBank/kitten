import React from 'react'
import { withInfo } from '@storybook/addon-info'
import { NavBar } from './index'
import { ScrollableContainer } from '../../../components/grid/scrollable-container'

export default {
  component: NavBar,
  title: 'Navigation/NavBar',
  decorators: [withInfo],
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
  `,
  header: false,
  propTables: false,
}

export const Default = () => (
  <NavBar>
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
