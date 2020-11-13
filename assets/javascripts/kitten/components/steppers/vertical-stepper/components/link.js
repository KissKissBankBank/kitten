import React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import { pxToRem } from '../../../../helpers/utils/typography'
import TYPOGRAPHY from '../../../../constants/typography-config'
import COLORS from '../../../../constants/colors-config'
import { LINK_CLASSNAME } from '../index'

const StyledParagraph = styled.p`
  margin: 0;
  padding: 0;
  line-height: 1;

  .k-Stepepers-VerticalStepper__link {
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

export const Link = ({ className, ...props }) => {
  return (
    <StyledParagraph>
      <span
        {...props}
        className={classNames(
          LINK_CLASSNAME,
          'k-Stepepers-VerticalStepper__link',
          className,
        )}
      />
    </StyledParagraph>
  )
}
