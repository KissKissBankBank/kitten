import React, { Component } from 'react'
import styled from 'styled-components'
import { ScreenConfig } from '../../../../constants/screen-config'
import {
  CONTAINER_PADDING_THIN,
  CONTAINER_PADDING,
} from '../../../../constants/grid-config'
import { pxToRem } from '../../../../helpers/utils/typography'

export const ListTableCol = styled.li`
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
