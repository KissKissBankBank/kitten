import React from 'react'
import styled from 'styled-components'
import { stepToRem } from '../../../../helpers/utils/typography'
import TYPOGRAPHY from '../../../../constants/typography-config'
import classNames from 'classnames'
import COLORS from '../../../../constants/colors-config'
import { STATUS_CLASSNAME } from '../index'

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
        STATUS_CLASSNAME,
        'k-VerticalProgress--title',
        {
          'k-VerticalProgress--title__actions': actions,
          'k-VerticalProgress--title__waiting': waiting,
          'k-VerticalProgress--title__publish': publish,
          'k-VerticalProgress--title__valid': valid,
        },
      )}
    >
      {children}
    </StyledTitle>
  )
}
