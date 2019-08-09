import React, { Component } from 'react'
import styled from 'styled-components'
import COLORS from '../../../../constants/colors-config'
import { ScreenConfig } from '../../../../constants/screen-config'
import {
  CONTAINER_MAX_WIDTH,
  CONTAINER_PADDING_THIN,
  CONTAINER_PADDING,
} from '../../../../constants/grid-config'
import { pxToRem } from '../../../../helpers/utils/typography'

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  background: ${COLORS.font1};
  color: ${COLORS.background1};
`

const StyledList = styled.ul`
  list-style: none;
  max-width: ${pxToRem(CONTAINER_MAX_WIDTH)};
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  padding-left: ${pxToRem(CONTAINER_PADDING_THIN)};
  padding-right: ${pxToRem(CONTAINER_PADDING_THIN)};
  height: ${pxToRem(90)};
  align-items: center;

  @media screen and (min-width: ${ScreenConfig.M.min}px) {
    padding-left: ${pxToRem(CONTAINER_PADDING)};
    padding-right: ${pxToRem(CONTAINER_PADDING)};
  }
`

export class ListTableHeader extends Component {
  render() {
    return (
      <StyledHeader>
        <StyledList>{this.props.children}</StyledList>
      </StyledHeader>
    )
  }
}
