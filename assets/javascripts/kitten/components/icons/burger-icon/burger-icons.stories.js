import React from 'react'
import { boolean, color } from '@storybook/addon-knobs'
import { BurgerIcon } from './index'
import COLORS from '../../../constants/colors-config'

const StoryGrid = ({ children }) => (
  <div className="story-Container">{children}</div>
)

export default {
  title: 'Icons/BurgerIcon',
  component: BurgerIcon,
}

export const Default = () => {
  return (
    <StoryGrid>
      <BurgerIcon
        isActive={boolean('isActive ?', false)}
        mainColor={color('mainColor', COLORS.font1)}
        hoverColor={color('hoverColor', COLORS.primary1)}
      />
    </StoryGrid>
  )
}
