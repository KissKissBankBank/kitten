import React from 'react'
import {
  StyledRightArrowContainer,
  StyledNextText,
  StyledArrowIcon,
} from './styled-components'

export const Next = ({ children, hoverColor }) => {
  return (
    <StyledRightArrowContainer
      hoverColor={hoverColor}
      as="button"
      className="k-u-reset-button"
    >
      <StyledNextText>{children}</StyledNextText>
      <StyledArrowIcon fill="#fff" />
    </StyledRightArrowContainer>
  )
}
