import React from 'react'
import { NavBar } from './index'
import { COLORS, ScrollableContainer } from '../../..'

export default {
  title: 'Organisms/NavBar',
  component: NavBar,
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="NavBar" />,
    },
  },
  args: {
    colors: {
      background: COLORS.primary6,
      link: COLORS.font1,
      border: 'rgba(0,0,0,0)',
      activeLink: COLORS.primary1,
      activeBorder: COLORS.primary1,
    },
    modifier: 'regular',
    listProps: {},
    navProps: {},
  },
  argTypes: {
    colors: {
      control: 'object',
    },
    modifier: { control: 'radio', options: ['small', 'regular', 'big'] },
    listProps: { control: 'object' },
    navProps: { control: 'object' },
  },
}

export const Default = args => (
  <NavBar {...args}>
    <NavBar.ListItem linkProps={{ href: '#1' }} active>
      Item 1
    </NavBar.ListItem>
    <NavBar.ListItem linkProps={{ href: '#2' }}>Item 2</NavBar.ListItem>
    <NavBar.ListItem linkProps={{ href: '#3' }}>Item 3</NavBar.ListItem>
    <NavBar.ListItem linkProps={{ href: '#4' }}>Item 4</NavBar.ListItem>
  </NavBar>
)

export const NestedInsideScrollableContainer = args => (
  <ScrollableContainer>
    <Default {...args} />
  </ScrollableContainer>
)
