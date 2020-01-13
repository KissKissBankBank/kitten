import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Header } from './components/header'
import { Col, HeaderCol, TitleCol } from './components/col'
import styled from 'styled-components'
import COLORS from '../../../constants/colors-config'
import { pxToRem } from '../../../helpers/utils/typography'
import { hexToRgba as rgba } from '../../../helpers/utils/hex-to-rgba'
import { ScreenConfig } from '../../../constants/screen-config'

const StyledContainer = styled.div`
  position: relative;
`

const StyledTableContainer = styled.div`
  overflow-x: scroll;
  margin-bottom: 1.875rem;
  border-left: ${pxToRem(2)} solid ${rgba(COLORS.background1, 0.0667)};
  border-right: ${pxToRem(2)} solid ${rgba(COLORS.background1, 0.0667)};

  background: linear-gradient(
      to right,
      white 30%,
      ${rgba(COLORS.background1, 0)}
    ),
    linear-gradient(to left, white 30%, ${rgba(COLORS.background1, 0)}),
    radial-gradient(
      farthest-side at 0 50%,
      ${rgba(COLORS.font1, 0.2)},
      ${rgba(COLORS.font1, 0)}
    ),
    radial-gradient(
      farthest-side at 100% 50%,
      ${rgba(COLORS.font1, 0.2)},
      ${rgba(COLORS.font1, 0)}
    );

  background-repeat: no-repeat;
  background-size: ${pxToRem(40)} 100%, ${pxToRem(40)} 100%, ${pxToRem(14)} 100%,
    ${pxToRem(14)} 100%;
  background-position: ${pxToRem(120)}, 100%;

  /* Opera doesn't support this in the shorthand */
  background-attachment: local, local, scroll, scroll;

  @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
    background-position: ${pxToRem(210)}, 100%;
  }
`

const StyledTable = styled.table`
  width: 100%;
  border-spacing: 0;
  table-layout: fixed;
  border-collapse: separate;
`

export const DoubleEntryTable = props => (
  <StyledContainer>
    <StyledTableContainer>
      <StyledTable {...props} />
    </StyledTableContainer>
  </StyledContainer>
)

DoubleEntryTable.Header = Header
DoubleEntryTable.Body = props => <tbody {...props} />
DoubleEntryTable.Row = props => <tr {...props} />
DoubleEntryTable.Col = Col
DoubleEntryTable.HeaderCol = HeaderCol
DoubleEntryTable.TitleCol = TitleCol
