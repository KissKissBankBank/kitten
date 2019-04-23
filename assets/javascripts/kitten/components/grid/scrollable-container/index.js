import React, { Component, Fragment } from 'react'
import {
  StyledContainer,
  StyledScrollableContainer,
  StyledLeftGradient,
  StyledRightGradient,
} from './styled'

export const ScrollableContainer = props => (
  <StyledContainer {...props}>
    <StyledScrollableContainer>{props.children}</StyledScrollableContainer>
  </StyledContainer>
)
