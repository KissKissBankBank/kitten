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

const StyledItem = styled.li`
  flex-grow: 0;
  flex-shrink: 0;

  &:not(:first-child) {
    padding-left: ${pxToRem(CONTAINER_PADDING_THIN)};
  }

  @media screen and (min-width: ${ScreenConfig.M.min}px) {
    &:not(:first-child) {
      padding-left: ${pxToRem(CONTAINER_PADDING)};
    }
  }
`

export class ListTableCol extends Component {
  render() {
    return <StyledItem {...this.props} />
  }
}
