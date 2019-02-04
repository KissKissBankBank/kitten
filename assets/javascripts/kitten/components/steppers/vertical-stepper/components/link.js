import React, { Component } from 'react'
import styled from 'styled-components'
import { pxToRem } from '../../../../helpers/utils/typography'
import TYPOGRAPHY from '../../../../constants/typography-config'
import COLORS from '../../../../constants/colors-config'

export class Link extends Component {
  render() {
    return (
      <StyledParagraph>
        <StyledLink {...this.props} />
      </StyledParagraph>
    )
  }
}

const StyledParagraph = styled.p`
  margin: 0;
  padding: 0;
  line-height: 1;
`

const StyledLink = styled.a`
  ${TYPOGRAPHY.fontStyles.regular};
  font-size: ${pxToRem(12)};
  line-height: normal;
  color: ${COLORS.primary1};
  text-decoration: none;

  transition: color 0.4s;

  &:hover,
  &:focus,
  &:active {
    color: ${COLORS.primary3};
  }
`
