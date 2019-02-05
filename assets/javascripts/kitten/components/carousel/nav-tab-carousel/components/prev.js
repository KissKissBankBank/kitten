import React from 'react'
import {
  StyledLeftArrowContainer,
  StyledPrevText,
  StyledArrowIcon,
} from './styled-components'

export const Prev = ({ children, hoverColor }) => {
  return (
    <StyledLeftArrowContainer hoverColor={hoverColor}>
      <StyledArrowIcon version="solid" direction="left" fill="#fff" />
      <StyledPrevText>{children}</StyledPrevText>
    </StyledLeftArrowContainer>
  )
}
