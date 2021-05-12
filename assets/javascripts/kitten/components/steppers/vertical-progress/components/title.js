import React from 'react'
import styled from 'styled-components'
import { stepToRem } from '../../../../helpers/utils/typography'
import { ScreenConfig } from '../../../../constants/screen-config'
import TYPOGRAPHY from '../../../../constants/typography-config'

const StyledTitle = styled.p`
  margin: 0;
  ${TYPOGRAPHY.fontStyles.bold};
  font-size: ${stepToRem(0)};

  @media (max-width: ${ScreenConfig.M.max}px) {
    font-size: ${stepToRem(1)};
  }
`

export const Title = ({ children, className }) => {
  return (
    <StyledTitle className={className}>
      {children}
    </StyledTitle>
  )
}
