import React from 'react'
import styled from 'styled-components'
import { Content } from './components/content'
import { Status } from './components/status'
import { pxToRem } from '../../../helpers/utils/typography'
import { ScreenConfig } from '../../../constants/screen-config'
import classNames from 'classnames'
import COLORS from '../../../constants/colors-config'

const StyledContainer = styled.div`
   border: ${pxToRem(2)} solid ${COLORS.line1};
   margin: ${pxToRem(30)};
`

export const VerticalProgress = ({ children, ...props }) => {
  return (
    <StyledContainer className="k-Steppers--VerticalProgress" {...props}>
      {children}
    </StyledContainer>
  )
}

VerticalProgress.Step = Step
VerticaleProgress.Content = Content
