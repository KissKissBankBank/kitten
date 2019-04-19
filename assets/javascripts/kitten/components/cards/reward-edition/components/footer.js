import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { pxToRem } from '../../../../helpers/utils/typography'
import COLORS from '../../../../constants/colors-config'

const borderWidth = pxToRem(2)
const borderColor = COLORS.line1

const StyledContainerFooter = styled.div`
  height: ${pxToRem(150)};
  border-top-width: ${borderWidth};
  border-top-style: solid;
  border-style: solid;
  border-top-color: ${borderColor};
  padding: ${pxToRem(40)};
`

export const Footer = props => <StyledContainerFooter />
