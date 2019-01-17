import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { ScreenConfig } from '../../../constants/screen-config'
import COLORS from '../../../constants/colors-config'
import TYPOGRAPHY from '../../../constants/typography-config'
import { pxToRem } from '../../../helpers/utils/typography'

const StyledInput = styled.input`
  width: 100%;

  border: none;
  outline: none;
  appearance: none;

  ${TYPOGRAPHY.fontStyles.bold};
  color: ${COLORS.text1};
  caret-color: ${COLORS.primary1};
  font-size: ${pxToRem(28)};
  line-height: ${pxToRem(44)};
  @media (min-width: ${ScreenConfig.S.min}px) {
    font-size: ${pxToRem(48)};
    line-height: ${pxToRem(68)};
  }
  @media (min-width: ${ScreenConfig.L.min}px) {
    font-size: ${pxToRem(64)};
    line-height: ${pxToRem(88)};
  }

  ::placeholder {
    color: ${COLORS.line1};
  }
`

export class SearchInput extends Component {
  render() {
    const { ...other } = this.props

    return <StyledInput type="search" {...other} />
  }
}
