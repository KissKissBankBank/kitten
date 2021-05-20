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
  padding-left: 0;

  &.k-VerticalProgress--title__actions {
    color: ${COLORS.orange};
  }
  &.k-VerticalProgress--title__waiting {
    color: ${COLORS.font3};
  }
  &.k-VerticalProgress--title__publish {
    color: ${COLORS.line3};
  }
  &.k-VerticalProgress--title__valid {
    color: ${COLORS.primary1};
  }
  &.k-VerticalProgress--title__disabled {
    color: ${COLORS.font2};
  }
`

export const Title = ({ 
  children,
  className,
  actions,
  waiting,
  publish,
  valid,
  disabled,
  ...other
}) => {
  return (
    <StyledTitle 
      {...other}
      className={classNames(
        'k-VerticalProgress--title',
        {
          'k-VerticalProgress--title__actions': actions,
          'k-VerticalProgress--title__waiting': waiting,
          'k-VerticalProgress--title__publish': publish,
          'k-VerticalProgress--title__valid': valid,
          'k-VerticalProgress--title__disabled': disabled,
        },
      )}
    >
      {children}
    </StyledTitle>
  )
}
