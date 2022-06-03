import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { StatusIconNext } from '../../graphics/icons-next/status-icon-next'
import { IconBadge } from '../../information/icon-badge'
import TYPOGRAPHY from '../../../constants/typography-config'
import { pxToRem } from '../../../helpers/utils/typography'
import classNames from 'classnames'

const AlertBoxWrapper = styled.div`
  ${TYPOGRAPHY.fontStyles.light};
  border-radius: var(--border-radius-s, ${pxToRem(6)});
  overflow: hidden;
  background-color: var(--color-primary-100);
  color: var(--color-grey-900);
  gap: var(--alertBox-gap);
  padding: ${pxToRem(18)} var(--alertBox-gap);

  &.k-AlertBox--content {
    display: inline-flex;
  }

  &.k-AlertBox--fluid {
    display: flex;
  }

  &.k-AlertBox--icon-start {
    align-items: flex-start;
  }

  &.k-AlertBox--icon-center {
    align-items: center;
  }

  .k-AlertBox__icon {
    flex: 0 0 auto;
    border-radius: var(--border-radius-rounded, ${pxToRem(9999)});
  }

  .k-AlertBox__text {
    flex: 1 1 auto;
    font-size: ${pxToRem(14)};
    line-height: ${pxToRem(18)};
  }

  &.k-AlertBox--medium {
    gap: ${pxToRem(15)};
    padding: ${pxToRem(10)};

    .k-AlertBox__icon {
      width: ${pxToRem(20)};
      height: ${pxToRem(20)};
      flex-basis: ${pxToRem(20)};
    }
  }

  &.k-AlertBox--large {
    gap: ${pxToRem(20)};
    padding: ${pxToRem(20)};

    .k-AlertBox__icon {
      width: ${pxToRem(30)};
      height: ${pxToRem(30)};
      flex-basis: ${pxToRem(30)};
    }
  }

  &.k-AlertBox--small {
    gap: ${pxToRem(5)};
    padding: ${pxToRem(5)};

    .k-AlertBox__text {
      font-size: ${pxToRem(12)};
      line-height: ${pxToRem(15)};
    }
    .k-AlertBox__icon {
      width: ${pxToRem(16)};
      height: ${pxToRem(16)};
      flex-basis: ${pxToRem(16)};
    }
  }

  .k-u-link,
  a {
    ${TYPOGRAPHY.fontStyles.bold};
    text-decoration: none;
  }

  &.k-AlertBox--info {
    background-color: var(--color-primary-100);

    .k-u-link,
    a {
      color: var(--color-primary-500);
    }
  }

  &.k-AlertBox--success {
    background-color: var(--color-success-100);

    .k-u-link,
    a {
      color: var(--color-success-500);
    }
  }

  &.k-AlertBox--danger {
    background-color: var(--color-danger-100);

    .k-u-link,
    a {
      color: var(--color-danger-500);
    }
  }

  &.k-AlertBox--warning {
    background-color: var(--color-warning-100);

    .k-u-link,
    a {
      color: var(--color-warning-500);
    }
  }

  &.k-AlertBox--pending {
    background-color: var(--color-grey-300);

    .k-u-link,
    a {
      color: var(--color-primary-500);
    }
  }

  &.k-AlertBox--disabled {
    background-color: var(--color-grey-200);

    .k-u-link,
    a {
      color: var(--color-grey-600);
    }
  }
`

export const AlertBox = ({
  className,
  children,
  icon,
  status,
  displayIcon,
  iconPosition,
  size,
  fit,
  iconHasBorder,
  ...others
}) => {
  const internalIcon = (() => {
    if (icon) return icon

    return <StatusIconNext status={status} />
  })()

  const role = (() => {
    switch (status) {
      case 'danger':
        return 'alert'
      case 'warning':
      case 'success':
        return 'status'
      default:
        return null
    }
  })()

  const iconSize = (() => {
    switch (size) {
      case 'large':
        return 'medium'
      case 'medium':
        return 'small'
      case 'small':
        return 'micro'
    }
  })()

  return (
    <AlertBoxWrapper
      role={role}
      className={classNames(
        'k-AlertBox',
        className,
        `k-AlertBox--${status}`,
        `k-AlertBox--${size}`,
        `k-AlertBox--${fit}`,
        `k-AlertBox--icon-${iconPosition}`,
        {
          'k-AlertBox--hasIcon': displayIcon,
        },
      )}
      {...others}
    >
      {displayIcon && (
        <IconBadge
          className="k-AlertBox__icon"
          children={internalIcon}
          status={status}
          size={iconSize}
          hasBorder={iconHasBorder}
        />
      )}

      <div className="k-AlertBox__text">{children}</div>
    </AlertBoxWrapper>
  )
}

AlertBox.propTypes = {
  status: PropTypes.oneOf([
    'info',
    'success',
    'danger',
    'warning',
    'disabled',
    'pending',
  ]),
  displayIcon: PropTypes.bool,
  iconPosition: PropTypes.oneOf(['start', 'center']),
  icon: PropTypes.node,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  fit: PropTypes.oneOf(['content', 'fluid']),
  iconHasBorder: PropTypes.bool,
}

AlertBox.defaultProps = {
  status: 'info',
  displayIcon: true,
  icon: null,
  size: 'medium',
  fit: 'fluid',
  iconPosition: 'start',
  iconHasBorder: true,
}
