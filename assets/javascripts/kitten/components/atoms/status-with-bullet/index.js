import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled from 'styled-components'
import COLORS from '../../../constants/colors-config'
import TYPOGRAPHY from '../../../constants/typography-config'
import { stepToRem, pxToRem } from '../../../helpers/utils/typography'

const StyledStatus = styled.span`
  color: currentColor;
  display: inline-flex;
  align-items: center;
  line-height: 1.2;

  .k-StatusWithBullet__bullet {
    background-color: currentColor;
    border-radius: 50%;
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

  &.k-StatusWithBullet--normal {
    font-size: ${stepToRem(0)};

    .k-StatusWithBullet__bullet {
      width: ${pxToRem(12)};
      height: ${pxToRem(12)};
      margin-right: ${pxToRem(11)};
    }
  }

  &.k-StatusWithBullet--tiny {
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

  &.k-StatusWithBullet--light {
    ${TYPOGRAPHY.fontStyles.light}
  }
  &.k-StatusWithBullet--regular {
    ${TYPOGRAPHY.fontStyles.regular}
  }
  &.k-StatusWithBullet--bold {
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
  size: PropTypes.oneOf(['normal', 'tiny', 'micro']),
  weight: PropTypes.oneOf(['light', 'regular', 'bold']),
  bulletProps: PropTypes.object,
}

StatusWithBullet.defaultProps = {
  statusType: 'success',
  size: 'tiny',
  weight: 'regular',
  bulletProps: {},
}
