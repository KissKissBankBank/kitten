import React from 'react'
import {
  StyledRightArrowContainer,
  StyledNextText,
  StyledArrowIcon,
} from './styled-components'

export const Next = ({ children, hoverColor }) => {
  return (
    <StyledRightArrowContainer hoverColor={hoverColor}>
      <StyledNextText>{children}</StyledNextText>
      <StyledArrowIcon fill="#fff" />
    </StyledRightArrowContainer>
  )
}
