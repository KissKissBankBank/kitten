import React, { Component } from 'react'
import styled from 'styled-components'
import TYPOGRAPHY from '../../../constants/typography-config'
import COLORS from '../../../constants/colors-config'
import { pxToRem } from '../../../helpers/utils/typography'

export const SearchInput = styled.input`
  width: 100%;

  outline: 0;
  border: 0;
  padding: ${pxToRem(10)} 0;

  ${TYPOGRAPHY.fontStyles.regular}
  font-size: ${pxToRem(60)};

  color: ${COLORS.primary1};

  ::placeholder {
    padding-left: ${pxToRem(10)};
    color: ${COLORS.line2};
  }
`
