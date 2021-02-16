import React from 'react'
import { boolean, color } from '@storybook/addon-knobs'
import { BurgerIcon } from './index'
import COLORS from '../../../constants/colors-config'

export default {
  title: 'Icons/BurgerIcon',
  component: BurgerIcon,
  decorators: [
    Story => (
      <div className="story-Container">
        <Story />
      </div>
    ),
  ],
}

export const Default = () => {
  return (
    <BurgerIcon
      isActive={boolean('isActive ?', false)}
      mainColor={color('mainColor', COLORS.font1)}
      hoverColor={color('hoverColor', COLORS.primary1)}
    />
  )
}
