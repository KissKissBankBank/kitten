import React from 'react'
import styled from 'styled-components'
import { stepToRem } from '../../../../helpers/utils/typography'
import TYPOGRAPHY from '../../../../constants/typography-config'
import classNames from 'classnames'
import COLORS from '../../../../constants/colors-config'

const StyledTitle = styled.p`
  margin: 0;
  ${TYPOGRAPHY.fontStyles.bold};
  font-size: ${stepToRem(1)};

  &.k-Steppers--VerticalProgress__title--actions {
    color: ${COLORS.orange};
  }
  &.k-Steppers--VerticalProgress__title--waiting {
    color: ${COLORS.font3};
  }
  &.k-Steppers--VerticalProgress__title--publish {
    color: ${COLORS.line3};
  }
  &.k-Steppers--VerticalProgress__title--valid {
    color: ${COLORS.primary1};
  }
`

export const Title = ({ 
  children,
  className,
  actions,
  waiting,
  publish,
  valid,
  ...other
}) => {
  return (
    <StyledTitle 
      {...other}
      className={classNames(
        'k-Steppers--VerticalProgress__title',
        {
          'k-Steppers--VerticalProgress__title--actions': actions,
          'k-Steppers--VerticalProgress__title--waiting': waiting,
          'k-Steppers--VerticalProgress__title--publish': publish,
          'k-Steppers--VerticalProgress__title--valid': valid,
        },
      )}
    >
      {children}
    </StyledTitle>
  )
}
