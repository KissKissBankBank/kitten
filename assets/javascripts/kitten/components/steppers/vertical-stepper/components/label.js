import React, { Component } from 'react'
import styled from 'styled-components'
import { pxToRem } from '../../../../helpers/utils/typography'
import TYPOGRAPHY from '../../../../constants/typography-config'

export class Label extends Component {
  render() {
    return <StyledLabel {...this.props} />
  }
}

const StyledLabel = styled.p`
  margin: 0 0 ${pxToRem(2)};

  ${TYPOGRAPHY.fontStyles.regular};
  font-size: ${pxToRem(16)};
  line-height: normal;
`
