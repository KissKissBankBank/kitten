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

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

export class ListTableBody extends Component {
  render() {
    return (
      <div>
        <StyledList>{this.props.children}</StyledList>
      </div>
    )
  }
}
