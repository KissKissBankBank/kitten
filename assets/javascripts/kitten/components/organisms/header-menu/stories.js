import React from 'react'
import { select, boolean } from '@storybook/addon-knobs'
import { HeaderMenu } from './index'
import { Marger, Container, LendopolisLogo } from '../../../'

const StoryGrid = ({ children }) => (
  <Container>
    <Marger top="5" bottom="5" style={{ width: '100%', maxWidth: '250px' }}>
      {children}
    </Marger>
  </Container>
)

export default {
  title: 'Organisms/HeaderMenu',
  component: HeaderMenu,
  decorators: [
    Story => (
      <div className="story-Container story-Grid story-Grid">
        <Story />
      </div>
    ),
  ],
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
        <HeaderMenu.Item as="button" type="button">
          Item as button
        </HeaderMenu.Item>
        <HeaderMenu.Item button href="#">
          Item with button prop
        </HeaderMenu.Item>
      </HeaderMenu>
    </StoryGrid>
  )
}
