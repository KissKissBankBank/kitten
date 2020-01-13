import React from 'react'
import styled, { css } from 'styled-components'
import { ScreenConfig } from '../../../../constants/screen-config'
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography'
import COLORS from '../../../../constants/colors-config'
import TYPOGRAPHY from '../../../../constants/typography-config'

const colStyle = css`
  height: ${pxToRem(68)};
  padding: 0 ${pxToRem(20)};
  border: ${pxToRem(2)} solid rgba(0, 0, 0, 6.7%);
  font-size: ${stepToRem(-1)};
  line-height: 1.3;
  box-sizing: border-box;
  text-align: left;
  width: ${pxToRem(120)} !important;
`

const firstColStyle = css`
  position: sticky;
  left: 0;

  @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
    width: ${pxToRem(210)} !important;
  }
`

export const Col = styled.td`
  ${colStyle}
  white-space: nowrap;
  border-left-width: 0;
  border-top-width: 0;
`

export const TitleCol = styled(props => <th scope="row" {...props} />)`
  ${colStyle}
  ${TYPOGRAPHY.fontStyles.regular}
  white-space: nowrap;
  background: ${COLORS.background1};
  border-top-width: 0;
  border-left-width: ${pxToRem(2)};

  ${firstColStyle}
`

export const HeaderCol = styled(props => <th scope="column" {...props} />)`
  ${colStyle}
  ${TYPOGRAPHY.fontStyles.bold}
  background: rgba(0,0,0,1.6%);
  border-left-width: 0;
  width: ${pxToRem(135)};

  &:first-child {
    background: ${COLORS.background2};
    border-color: ${COLORS.line1};
    border-left-width: ${pxToRem(2)};
    ${firstColStyle}
  }
`
