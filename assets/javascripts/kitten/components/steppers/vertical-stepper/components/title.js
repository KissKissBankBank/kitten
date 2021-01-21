import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography'
import { ScreenConfig } from '../../../../constants/screen-config'
import TYPOGRAPHY from '../../../../constants/typography-config'
import classNames from 'classnames'

const StyledTitle = styled.p`
  margin: 0;

  ${TYPOGRAPHY.fontStyles.regular};
  font-size: ${stepToRem(0)};
  line-height: normal;

  &.k-Stepepers-VerticalStepper__title--orion {
    font-size: ${stepToRem(-2)};
    font-weight: bold;
    line-height: 1;
    margin-bottom: ${pxToRem(5)};

    @media (min-width: ${ScreenConfig.S.min}px) {
      font-size: ${stepToRem(-1)};
    }
  }
`

export const Title = ({ variant, className, children }) => {
  return (
    <StyledTitle
      className={classNames(
        `k-Stepepers-VerticalStepper__title--${variant}`,
        className,
      )}
    >
      {children}
    </StyledTitle>
  )
}

Title.protoTypes = {
  variant: PropTypes.oneOf(['andromeda', 'orion']),
}

Title.defaultProps = {
  variant: 'andromeda',
}
