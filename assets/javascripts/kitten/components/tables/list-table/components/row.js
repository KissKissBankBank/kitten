import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import COLORS from '../../../../constants/colors-config'
import { ScreenConfig } from '../../../../constants/screen-config'
import {
  CONTAINER_MAX_WIDTH,
  CONTAINER_PADDING_THIN,
  CONTAINER_PADDING,
} from '../../../../constants/grid-config'
import { pxToRem } from '../../../../helpers/utils/typography'

const StyledItem = styled.li`
  &:hover {
    cursor: pointer;
    background: ${COLORS.background2};
  }

  border-bottom: 2px solid ${COLORS.line1};

  ${({ selected }) => {
    if (!selected) return

    return css`
      background: ${COLORS.primary6};

      &:hover {
        background: ${COLORS.primary5};
      }
    `
  }}
`

const StyledItemList = styled.ul`
  height: ${pxToRem(90)};
  margin: 0 auto;
  max-width: ${pxToRem(CONTAINER_MAX_WIDTH)};
  padding-left: ${pxToRem(CONTAINER_PADDING_THIN)};
  padding-right: ${pxToRem(CONTAINER_PADDING_THIN)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  @media screen and (min-width: ${ScreenConfig.M.min}px) {
    padding-left: ${pxToRem(CONTAINER_PADDING)};
    padding-right: ${pxToRem(CONTAINER_PADDING)};
  }
`

export const ListTableRow = ({ selected, ...others }) => {
  return (
    <StyledItem selected={selected}>
      <StyledItemList {...others} />
    </StyledItem>
  )
}

ListTableRow.defaultProps = {
  selected: false,
}
ListTableRow.propTypes = {
  selected: PropTypes.bool,
}
