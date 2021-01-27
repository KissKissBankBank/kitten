import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography'
import TYPOGRAPHY from '../../../../constants/typography-config'
import { ScreenConfig } from '../../../../constants/screen-config'
import COLORS from '../../../../constants/colors-config'
import { LINK_CLASSNAME } from '../index'

const StyledParagraph = styled.span`
  margin: 0;
  padding: 0;
  line-height: 1;

  .k-Steppers--VerticalStepper__link {
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
  }

  .k-Steppers--VerticalStepper__link--orion {
    font-size: ${stepToRem(-2)};

    @media (min-width: ${ScreenConfig.S.min}px) {
      font-size: ${stepToRem(-1)};
    }

    :before {
      padding: 0 ${pxToRem(8)};
      content: '●';
      font-size: ${pxToRem(8)};
      color: ${COLORS.font1};
    }
  }
`

export const Link = ({ variant, className, ...props }) => {
  return (
    <StyledParagraph>
      <span
        {...props}
        className={classNames(
          LINK_CLASSNAME,
          'k-Steppers--VerticalStepper__link',
          `k-Steppers--VerticalStepper__link--${variant}`,
          className,
        )}
      />
    </StyledParagraph>
  )
}

Link.protoTypes = {
  variant: PropTypes.oneOf(['andromeda', 'orion']),
}

Link.defaultProps = {
  variant: 'andromeda',
}
