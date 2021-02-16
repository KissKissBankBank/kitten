import React from 'react'
import { select, boolean } from '@storybook/addon-knobs'
import { HeaderMenu } from './index'
import { LendopolisLogo } from '../../logos/lendopolis-logo'

const StoryGrid = ({ children }) => (
  <div className="story-Container story-Grid">{children}</div>
)

export default {
  title: 'Menus/HeaderMenu',
  component: HeaderMenu,
}

export const Default = () => {
  return (
    <StoryGrid>
      <HeaderMenu
        borderSide={select(
          'Border side',
          { Left: 'left', Right: 'right' },
          'left',
        )}
        largeItem={boolean('Large item', false)}
        noBorder={boolean('No border', false)}
      >
        <HeaderMenu.Item href="#">Item 1</HeaderMenu.Item>
        <HeaderMenu.Item href="#" isSelected>
          Item 2 (actif)
        </HeaderMenu.Item>
        <HeaderMenu.Item href="#">Item 3</HeaderMenu.Item>
        <HeaderMenu.Item href="#" modifier="light">
          Item 4 (light)
        </HeaderMenu.Item>
        <HeaderMenu.Item external href="#">
          <LendopolisLogo primaryColor="#222" />
        </HeaderMenu.Item>
        <HeaderMenu.Item external href="#">
          Item 5
        </HeaderMenu.Item>
      </HeaderMenu>
    </StoryGrid>
  )
}
