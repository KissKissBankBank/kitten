import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled from 'styled-components'
import TYPOGRAPHY from '../../../constants/typography-config'
import { pxToRem } from '../../../helpers/utils/typography'
import { checkDeprecatedSizes } from '../../../helpers/utils/deprecated'

const StyledTag = styled.span`
  display: inline-block;
  height: ${pxToRem(24)};
  box-sizing: border-box;
  padding: 0 ${pxToRem(10)};
  white-space: nowrap;
  line-height: ${pxToRem(24)};
  ${TYPOGRAPHY.fontStyles.regular}
  font-size: ${pxToRem(10)};
  border-radius: var(--border-radius-rounded);
  text-transform: uppercase;
  letter-spacing: 0.1em;

  &.k-Tag--flex {
    display: inline-flex;
    align-items: center;
    gap: ${pxToRem(8)};
  }

  &.k-Tag--small {
    gap: ${pxToRem(5)};
    height: ${pxToRem(18)};
    padding: 0 ${pxToRem(5)};
    font-size: ${pxToRem(8)};
    line-height: ${pxToRem(18)};
  }

  & {
    svg {
      &,
      path {
        fill: currentColor;
      }
    }
  }

  /* LIGHT */

  &.k-Tag--light.k-Tag--info {
    background-color: var(--color-primary-100);
    color: var(--color-grey-900);
  }
  &.k-Tag--light.k-Tag--warning {
    background-color: var(--color-warning-100);
    color: var(--color-grey-900);
  }
  &.k-Tag--light.k-Tag--success {
    background-color: var(--color-success-100);
    color: var(--color-grey-900);
  }
  &.k-Tag--light.k-Tag--error {
    background-color: var(--color-danger-100);
    color: var(--color-grey-900);
  }
  &.k-Tag--light.k-Tag--disabled {
    background-color: var(--color-grey-300);
    color: var(--color-grey-900);
  }

  /* STATUS */

  &.k-Tag--status.k-Tag--info {
    background-color: var(--color-primary-100);
    color: var(--color-primary-700);
  }
  &.k-Tag--status.k-Tag--warning {
    background-color: var(--color-warning-100);
    color: var(--color-warning-900);
  }
  &.k-Tag--status.k-Tag--success {
    background-color: var(--color-success-100);
    color: var(--color-success-700);
  }
  &.k-Tag--status.k-Tag--error {
    background-color: var(--color-danger-100);
    color: var(--color-danger-700);
  }
  &.k-Tag--status.k-Tag--disabled {
    background-color: var(--color-grey-300);
    color: var(--color-grey-800);
  }

  /* DARK */

  &.k-Tag--dark.k-Tag--info {
    background-color: var(--color-primary-500);
    color: var(--color-grey-000);
  }
  &.k-Tag--dark.k-Tag--warning {
    background-color: var(--color-warning-700);
    color: var(--color-grey-000);
  }
  &.k-Tag--dark.k-Tag--success {
    background-color: var(--color-success-500);
    color: var(--color-grey-000);
  }
  &.k-Tag--dark.k-Tag--error {
    background-color: var(--color-danger-500);
    color: var(--color-grey-000);
  }
  &.k-Tag--dark.k-Tag--disabled {
    background-color: var(--color-grey-800);
    color: var(--color-grey-000);
  }
`

export const Tag = ({
  type,
  size,
  variant,
  className,
  flex,
  children,
  ...props
}) => {
  checkDeprecatedSizes(size)

  return (
    <StyledTag
      className={classNames(
        'k-Tag',
        className,
        `k-Tag--${type}`,
        `k-Tag--${size}`,
        `k-Tag--${variant}`,
        {
          'k-Tag--flex': flex,
        },
      )}
      {...props}
    >
      {children}
    </StyledTag>
  )
}

Tag.propTypes = {
  type: PropTypes.oneOf(['info', 'warning', 'success', 'error', 'disabled']),
  size: PropTypes.oneOf(['small', 'medium']),
  variant: PropTypes.oneOf(['light', 'status', 'dark']),
  flex: PropTypes.bool,
}

Tag.defaultProps = {
  type: 'info',
  size: 'medium',
  variant: 'status',
  flex: false,
}
