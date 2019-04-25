import React from 'react'
import PropTypes from 'prop-types'
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

ScrollableContainer.propTypes = {
  backgroundColor: PropTypes.string,
  shadowColor: PropTypes.string,
}
