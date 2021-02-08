import React from 'react'
import classNames from 'classnames'
import styled from 'styled-components'
import { stepToRem } from '../../../helpers/utils/typography'
import TYPOGRAPHY from '../../../constants/typography-config'

const StyledSupTitle = styled.div`
  font-size: ${stepToRem(-1)};
  line-height: normal;
  text-transform: uppercase;
  ${TYPOGRAPHY.fontStyles.bold};
`

export const SupTitle = ({
  className,
  tag,
  ...supTitleProps
}) => (

  <StyledSupTitle
    as={tag}
    className={classNames('k-SupTitle', className)}
    {...supTitleProps}
  />
)

SupTitle.defaultProps = {
  tag: 'div',
  children: 'Lorem ipsum',
}
