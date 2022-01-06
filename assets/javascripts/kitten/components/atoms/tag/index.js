import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled from 'styled-components'
import COLORS from '../../../constants/colors-config'
import TYPOGRAPHY from '../../../constants/typography-config'
import { pxToRem } from '../../../helpers/utils/typography'

const StyledTag = styled.span`
  height: ${pxToRem(30)};
  box-sizing: border-box;
  display: inline-block;
  padding: 0 ${pxToRem(10)};
  white-space: nowrap;
  line-height: ${pxToRem(30)};
  ${TYPOGRAPHY.fontStyles.regular}
  font-size: ${pxToRem(14)};
  border-radius: var(--border-radius-xs);

  &.k-Tag--info {
    background-color: var(--color-primary-100);
    color: var(--color-primary-700);
  }
  &.k-Tag--warning {
    background-color: var(--color-warning-100);
    color: var(--color-warning-700);
  }
  &.k-Tag--success {
    background-color: var(--color-success-100);
    color: var(--color-success-700);
  }
  &.k-Tag--error {
    background-color: var(--color-danger-100);
    color: var(--color-danger-700);
  }
  &.k-Tag--disabled {
    background-color: var(--color-grey-100);
    color: var(--color-grey-700);
  }

  &.k-Tag--small {
    height: ${pxToRem(20)};
    padding: 0 ${pxToRem(5)};
    font-size: ${pxToRem(10)};
    line-height: ${pxToRem(20)};
  }
`

export const Tag = ({ type, size, className, ...props }) => (
  <StyledTag
    className={
      classNames(
        'k-Tag',
        className,
        `k-Tag--${type}`,
        `k-Tag--${size}`
      )
    }
    {...props}
  />
)

Tag.propTypes = {
  type: PropTypes.oneOf(['info', 'warning', 'success', 'error', 'disabled']),
  size: PropTypes.oneOf(['regular', 'small']),
}

Tag.defaultProps = {
  type: 'info',
  size: 'regular',
}
