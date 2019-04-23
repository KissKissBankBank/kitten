import React, { Component, Fragment } from 'react'
import {
  StyledContainer,
  StyledScrollableContainer,
  StyledLeftGradient,
  StyledRightGradient,
} from './styled'
import COLORS from '../../../constants/colors-config'

export const ScrollableContainer = ({
  backgroundColor = COLORS.background1,
  shadowColor = COLORS.font1,
  children,
  ...other
}) => (
  <StyledContainer {...other}>
    <StyledScrollableContainer
      backgroundColor={backgroundColor}
      shadowColor={shadowColor}
    >
      {children}
    </StyledScrollableContainer>
  </StyledContainer>
)
