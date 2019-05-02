import React from 'react'
import styled from 'styled-components'
import { pxToRem } from '../../../../helpers/utils/typography'
import COLORS from '../../../../constants/colors-config'
import { ScreenConfig } from '../../../../constants/screen-config'

const borderWidth = pxToRem(2)
const borderColor = COLORS.line1

export const Footer = styled.div`
  border-top-width: ${borderWidth};
  border-top-style: solid;
  border-top-color: ${borderColor};
  padding: ${pxToRem(40)};

  @media (max-width: ${ScreenConfig.S.max}px) {
    padding: ${pxToRem(30)};
  }
`
