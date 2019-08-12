import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import COLORS from '../../../../constants/colors-config'
import { ScreenConfig } from '../../../../constants/screen-config'
import {
  CONTAINER_MAX_WIDTH,
  CONTAINER_PADDING_THIN,
  CONTAINER_PADDING,
} from '../../../../constants/grid-config'
import { pxToRem } from '../../../../helpers/utils/typography'
import { Context } from './context'

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
    const { isHeader, colNumber, ...others } = this.props
    return (
      <Context.Consumer>
        {id => (
          <StyledItem
            id={isHeader && colNumber && `${id}-col-${colNumber}`}
            aria-describedby={
              !isHeader && colNumber && `${id}-col-${colNumber}`
            }
            {...others}
          />
        )}
      </Context.Consumer>
    )
  }
}

ListTableCol.defaultProps = {
  isHeader: false,
}
ListTableCol.propTypes = {
  isHeader: PropTypes.bool,
  colNumber: PropTypes.number.isRequired,
}
