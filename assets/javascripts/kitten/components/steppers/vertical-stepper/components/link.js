import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import classNames from 'classnames'
import { pxToRem } from '../../../../helpers/utils/typography'
import TYPOGRAPHY from '../../../../constants/typography-config'
import COLORS from '../../../../constants/colors-config'
import { LINK_CLASSNAME } from '../index'

export class Link extends Component {
  render() {
    return (
      <StyledParagraph>
        <StyledLink
          {...this.props}
          className={classNames(LINK_CLASSNAME, this.props.className)}
        />
      </StyledParagraph>
    )
  }
}

const StyledParagraph = styled.p`
  margin: 0;
  padding: 0;
  line-height: 1;
`

const StyledLink = styled.span`
  ${TYPOGRAPHY.fontStyles.regular};
  font-size: ${pxToRem(12)};
  line-height: normal;
  color: ${COLORS.primary1};
  text-decoration: none;

  ${({ as }) =>
    as === 'a' &&
    css`
      transition: color 0.4s;

      :hover,
      :focus,
      :active {
        color: ${COLORS.primary3};
      }
    `}
`
