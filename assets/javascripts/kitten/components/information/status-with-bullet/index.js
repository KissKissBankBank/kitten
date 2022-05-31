import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled from 'styled-components'
import COLORS from '../../../constants/colors-config'
import TYPOGRAPHY from '../../../constants/typography-config'
import { stepToRem, pxToRem } from '../../../helpers/utils/typography'
import {
  checkDeprecatedSizes,
  checkDeprecatedWeights,
} from '../../../helpers/utils/deprecated'

const StyledStatus = styled.span`
  color: currentColor;
  display: inline-flex;
  align-items: center;
  line-height: 1.2;

  .k-StatusWithBullet__bullet {
    background-color: currentColor;
    border-radius: var(--border-radius-rounded);
    margin-top: ${pxToRem(2)};
    flex: 0 0 auto;
  }

  .k-StatusWithBullet__status {
    flex: 0 1 auto;
  }

  &.k-StatusWithBullet--danger {
    color: ${COLORS.error};
  }
  &.k-StatusWithBullet--success {
    color: ${COLORS.valid};
  }
  &.k-StatusWithBullet--warning {
    color: ${COLORS.orange};
  }
  &.k-StatusWithBullet--neutral {
    color: ${COLORS.primary1};
  }

  &.k-StatusWithBullet--normal,
  &.k-StatusWithBullet--medium {
    font-size: ${stepToRem(0)};

    .k-StatusWithBullet__bullet {
      width: ${pxToRem(12)};
      height: ${pxToRem(12)};
      margin-right: ${pxToRem(11)};
    }
  }

  &.k-StatusWithBullet--tiny,
  &.k-StatusWithBullet--small {
    font-size: ${stepToRem(-1)};

    .k-StatusWithBullet__bullet {
      width: ${pxToRem(10)};
      height: ${pxToRem(10)};
      margin-right: ${pxToRem(10)};
    }
  }

  &.k-StatusWithBullet--micro {
    font-size: ${stepToRem(-2)};

    .k-StatusWithBullet__bullet {
      width: ${pxToRem(7)};
      height: ${pxToRem(7)};
      margin-right: ${pxToRem(8)};
    }
  }

  &.k-StatusWithBullet--light,
  &.k-StatusWithBullet--400 {
    ${TYPOGRAPHY.fontStyles.light}
  }
  &.k-StatusWithBullet--regular,
  &.k-StatusWithBullet--500 {
    ${TYPOGRAPHY.fontStyles.regular}
  }
  &.k-StatusWithBullet--bold,
  &.k-StatusWithBullet--700 {
    ${TYPOGRAPHY.fontStyles.bold}
  }
`

export const StatusWithBullet = ({
  statusMessage,
  statusType,
  bulletProps,
  size,
  className,
  children,
  weight,
  ...props
}) => {
  checkDeprecatedSizes(size)
  checkDeprecatedWeights(weight)

  return (
    <StyledStatus
      className={classNames(
        'k-StatusWithBullet',
        className,
        `k-StatusWithBullet--${statusType}`,
        `k-StatusWithBullet--${size}`,
        `k-StatusWithBullet--${weight}`,
      )}
      {...props}
    >
      <span
        aria-hidden="true"
        {...bulletProps}
        className={classNames(
          'k-StatusWithBullet__bullet',
          bulletProps?.className,
        )}
      />
      <span className="k-StatusWithBullet__status">
        {statusMessage || children}
      </span>
    </StyledStatus>
  )
}

StatusWithBullet.propTypes = {
  statusMessage: PropTypes.node,
  statusType: PropTypes.oneOf([
    'danger',
    'success',
    'warning',
    'neutral',
    'none',
  ]),
  size: PropTypes.oneOf(['micro', 'small', 'medium']),
  weight: PropTypes.oneOf(['400', '500', '700']),
  bulletProps: PropTypes.object,
}

StatusWithBullet.defaultProps = {
  statusType: 'success',
  size: 'small',
  weight: '500',
  bulletProps: {},
}
