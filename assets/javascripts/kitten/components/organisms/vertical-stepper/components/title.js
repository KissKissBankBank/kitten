import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography'
import { ScreenConfig } from '../../../../constants/screen-config'
import TYPOGRAPHY from '../../../../constants/typography-config'
import classNames from 'classnames'

const StyledTitle = styled.p`
  margin: 0 0 ${pxToRem(5)};

  ${TYPOGRAPHY.fontStyles.bold};
  font-size: ${stepToRem(-2)};
  line-height: 1;

  @media (min-width: ${ScreenConfig.S.min}px) {
    font-size: ${stepToRem(-1)};
  }
`

export const Title = ({ className, children }) => {
  return (
    <StyledTitle
      className={classNames(
        'k-Steppers--VerticalStepper__title',
        className,
      )}
    >
      {children}
    </StyledTitle>
  )
}
