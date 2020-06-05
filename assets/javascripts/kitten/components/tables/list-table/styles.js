import React from 'react'
import styled from 'styled-components'
import COLORS from '../../../constants/colors-config'
import { ScreenConfig } from '../../../constants/screen-config'
import {
  CONTAINER_MAX_WIDTH,
  CONTAINER_PADDING_THIN,
  CONTAINER_PADDING,
} from '../../../constants/grid-config'
import { pxToRem } from '../../../helpers/utils/typography'

export const StyledListTable = styled.section`
  &,
  & * {
    box-sizing: border-box;
  }

  .k-ListTable__Header {
    position: sticky;
    top: 0;
    background: ${COLORS.font1};
    color: ${COLORS.background1};
  }

  .k-ListTable__HeaderList {
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
  }

  .k-ListTable__Body {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .k-ListTable__Row {
    border-bottom: 2px solid ${COLORS.line1};

    .k-ListTable__Row--is_highlighted {
      background: ${COLORS.primary6};
    }
  }

  .k-ListTable__RowList {
    height: ${pxToRem(90)};
    margin: 0 auto;
    max-width: ${pxToRem(CONTAINER_MAX_WIDTH)};
    padding-left: ${pxToRem(CONTAINER_PADDING_THIN)};
    padding-right: ${pxToRem(CONTAINER_PADDING_THIN)};
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    list-style: none;

    @media screen and (min-width: ${ScreenConfig.M.min}px) {
      padding-left: ${pxToRem(CONTAINER_PADDING)};
      padding-right: ${pxToRem(CONTAINER_PADDING)};
    }
  }

  .k-ListTable__Col {
    flex-grow: 0;
    flex-shrink: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    &:not(:first-child) {
      padding-left: ${pxToRem(CONTAINER_PADDING_THIN)};
    }

    @media screen and (min-width: ${ScreenConfig.M.min}px) {
      &:not(:first-child) {
        padding-left: ${pxToRem(CONTAINER_PADDING)};
      }
    }
  }
`
