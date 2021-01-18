import React from 'react'
import { boolean, color } from '@storybook/addon-knobs'
import { BurgerIcon } from './index'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'
import COLORS from '../../../constants/colors-config'

const StoryGrid = ({ children }) => (
  <Container>
    <Marger top="5" bottom="5">
      {children}
    </Marger>
  </Container>
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
