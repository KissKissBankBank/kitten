import React from 'react'
import {
  LeftArrowContainerStyles,
  PrevTextStyles,
  ArrowIconStyle,
} from './styles'

export const Prev = ({ children, hoverColor }) => {
  return (
    <LeftArrowContainerStyles hoverColor={hoverColor}>
      <ArrowIconStyle version="solid" direction="left" fill="#fff" />
      <PrevTextStyles>{children}</PrevTextStyles>
    </LeftArrowContainerStyles>
  )
}
