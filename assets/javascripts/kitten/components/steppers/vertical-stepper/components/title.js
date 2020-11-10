import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { pxToRem } from '../../../../helpers/utils/typography'
import TYPOGRAPHY from '../../../../constants/typography-config'
import classNames from 'classnames'

const StyledTitle = styled.p`
  margin: 0 0 ${pxToRem(2)};

  ${TYPOGRAPHY.fontStyles.regular};
  font-size: ${pxToRem(16)};
  line-height: normal;

  k-Stepepers-VerticalStepper__title--orion {
    font-size: ${pxToRem(14)};
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
