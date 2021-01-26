import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled from 'styled-components'
import COLORS from '../../../constants/colors-config'
import TYPOGRAPHY from '../../../constants/typography-config'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'

const StyledTag = styled.span`
  height: ${pxToRem(30)};
  box-sizing: border-box;
  display: inline-block;
  padding: 0 ${pxToRem(10)};
  white-space: nowrap;
  line-height: ${pxToRem(30)};
  ${TYPOGRAPHY.fontStyles.light}
  font-size: ${stepToRem(-1)};
  border-radius: ${pxToRem(4)};

  &.k-Tag--info {
    background-color: ${COLORS.primary5};
  }
  &.k-Tag--warning {
    background-color: ${COLORS.orange1};
  }
  &.k-Tag--success {
    background-color: ${COLORS.valid1};
  }
  &.k-Tag--error {
    background-color: ${COLORS.error2};
  }
  &.k-Tag--disabled {
    background-color: ${COLORS.line1};
  }
`

export const Tag = ({ type, className, ...props }) => (
  <StyledTag
    className={classNames('k-Tag', className, `k-Tag--${type}`)}
    {...props}
  />
)

Tag.propTypes = {
  type: PropTypes.oneOf(['info', 'warning', 'success', 'error', 'disabled']),
}

Tag.defaultProps = {
  type: 'info',
}
