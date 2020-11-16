import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography'
import TYPOGRAPHY from '../../../../constants/typography-config'
import classNames from 'classnames'

const StyledTitle = styled.p`
  margin: 0 0 ${pxToRem(2)};

  ${TYPOGRAPHY.fontStyles.regular};
  font-size: ${stepToRem(0)};
  line-height: normal;

  &.k-Stepepers-VerticalStepper__title--orion {
    font-size: ${stepToRem(-1)};
    font-weight: 500;
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
