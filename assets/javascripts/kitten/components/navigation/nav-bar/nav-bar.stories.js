import React from 'react'
import { color, select } from '@storybook/addon-knobs'
import { NavBar } from './index'
import { ScrollableContainer } from '../../../components/grid/scrollable-container'
import COLORS from '../../../constants/colors-config'

const modifierTypes = {
  Regular: 'regular',
  Big: 'big',
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
    modifier={select('Modifier', modifierTypes, 'regular')}
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
