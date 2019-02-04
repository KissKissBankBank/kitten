import React, { Component } from 'react'
import styled from 'styled-components'
import { pxToRem } from '../../../../helpers/utils/typography'
import TYPOGRAPHY from '../../../../constants/typography-config'
import COLORS from '../../../../constants/colors-config'

const StyledList = styled.ul`
  margin: ${pxToRem(5)} 0 ${pxToRem(10)};
  padding: 0;

  ${TYPOGRAPHY.fontStyles.regular};
  font-size: ${pxToRem(12)};
  line-height: normal;
`

const StyledItem = styled.li`
  display: flex;
  align-items: baseline;

  margin: 0 0 ${pxToRem(2)};
  padding: 0;
  list-style: none;

  :before {
    padding-right: ${pxToRem(10)};
    content: '●';
    font-size: ${pxToRem(8)};
  }
`

export class List extends Component {
  static Item = StyledItem

  render() {
    return <StyledList {...this.props} />
  }
}
