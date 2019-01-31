import React from 'react'
import {
  RightArrowContainerStyles,
  NextTextStyles,
  ArrowIconStyle,
} from './styles'

export const Next = ({ children, hoverColor }) => {
  return (
    <RightArrowContainerStyles hoverColor={hoverColor}>
      <NextTextStyles>{children}</NextTextStyles>
      <ArrowIconStyle version="solid" fill="#fff" />
    </RightArrowContainerStyles>
  )
}
