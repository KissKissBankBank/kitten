import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { pxToRem } from '../../../../helpers/utils/typography'
import COLORS from '../../../../constants/colors-config'
import TYPOGRAPHY from '../../../../constants/typography-config'
import { CheckedIcon } from '../../../../components/graphics/icons/checked-icon'
import { WarningIcon } from '../../../../components/graphics/icons/warning-icon'
import { WaitingIcon } from '../../../../components/graphics/icons/waiting-icon'
import { DotIcon } from '../../../../components/graphics/icons/dot-icon'
import { LockIcon } from '../../../../components/graphics/icons/lock-icon'
import { ScreenConfig } from '../../../../constants/screen-config'
import classNames from 'classnames'

export class Status extends Component {
  render() {
    const {
      children,
      valid,
      success,
      error,
      waiting,
      disabled,
      bridge,
      ...other
    } = this.props

    return (
      <StyledContainerStatus
        className={classNames(
          'k-Steppers--VerticalStepper__statusContainer',
        )}
      >
        <span
          {...other}
          className={classNames(
            'k-Steppers--VerticalStepper__status',
            {
              'k-Steppers--VerticalStepper__status--valid': valid,
              'k-Steppers--VerticalStepper__status--success': success,
              'k-Steppers--VerticalStepper__status--error': error,
              'k-Steppers--VerticalStepper__status--waiting': waiting,
              'k-Steppers--VerticalStepper__status--disabled': disabled,
              'k-Steppers--VerticalStepper__status--bridge': bridge,
            },
          )}
        >
          {this.iconByStatus() || children}
        </span>
      </StyledContainerStatus>
    )
  }

  iconByStatus = () => {
    const { valid, success, error, waiting, disabled } = this.props

    if (success) return <CheckedIcon width="10" title={null} />

    if (error) return <WarningIcon color={COLORS.error} title={null} />

    if (valid) return <DotIcon width="6" color={COLORS.primary1} title={null} />

    return null
  }
}

const STATUS_SIZE = 30
const MOBILE_STATUS_SIZE = 24
const INACTIVE_STATUS_SIZE = 16
const MOBILE_INACTIVE_STATUS_SIZE = 12

const StyledContainerStatus = styled.div`
  border-width: ${pxToRem(4)};
  border-style: solid;
  border-color: ${COLORS.background1};

  @media (min-width: ${ScreenConfig.S.min}px) {
    border-width: ${pxToRem(5)};
  }

  .k-Steppers--VerticalStepper__status {
    flex-shrink: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    box-sizing: border-box;
    margin-right: ${pxToRem(11)};
    z-index: 1;
    padding: ${pxToRem(3)};
    width: ${pxToRem(MOBILE_STATUS_SIZE)};
    height: ${pxToRem(MOBILE_STATUS_SIZE)};

    border: ${pxToRem(3)} solid ${COLORS.background1};
    border-radius: var(--border-radius-rounded);

    background-color: ${COLORS.background1};

    ${TYPOGRAPHY.fontStyles.regular};
    font-size: ${pxToRem(14)};

    @media (min-width: ${ScreenConfig.S.min}px) {
      width: ${pxToRem(STATUS_SIZE)};
      height: ${pxToRem(STATUS_SIZE)};
      border-radius: var(--border-radius-rounded);
      margin-right: ${pxToRem(15)};
    }


    &.k-Steppers--VerticalStepper__status--success {
        background-color: ${COLORS.primary1};
        border-color: ${COLORS.primary1};
    }

    &.k-Steppers--VerticalStepper__status--valid {
        background-color: ${COLORS.background1};
        border-color: ${COLORS.primary1};
    }

    &.k-Steppers--VerticalStepper__status--error {
        color: ${COLORS.error};
        border-color: ${COLORS.error};
    }

    &.k-Steppers--VerticalStepper__status--waiting {
        background-color: ${COLORS.background1};
        border-color: ${COLORS.line1};
    }

    &.k-Steppers--VerticalStepper__status--disabled {
        background-color: ${COLORS.background1};
        border-color: ${COLORS.line1};
        border-width: ${pxToRem(2)};

        width: ${pxToRem(MOBILE_INACTIVE_STATUS_SIZE)};
        height: ${pxToRem(MOBILE_INACTIVE_STATUS_SIZE)};
        border-radius: var(--border-radius-rounded);
        margin-left: ${pxToRem(7)};
        margin-right: ${pxToRem(15)};

        @media (min-width: ${ScreenConfig.S.min}px) {
          width: ${pxToRem(INACTIVE_STATUS_SIZE)};
          height: ${pxToRem(INACTIVE_STATUS_SIZE)};
          border-radius: var(--border-radius-rounded);
          margin-right: ${pxToRem(20)};
          border-width: ${pxToRem(3)};
        }
    }

    &.k-Steppers--VerticalStepper__status--bridge {
      height: ${pxToRem(21)};
      position: relative;
      border: 0;

      &::before {
        width: ${pxToRem(2)};
        content: '';
        position: absolute;
        height: 100%;
        border-left: ${pxToRem(3)} dotted ${COLORS.line1};
        margin-left: ${pxToRem(3)};
      }
    }
  }
`

Status.propTypes = {
  valid: PropTypes.bool,
  success: PropTypes.bool,
  error: PropTypes.bool,
  waiting: PropTypes.bool,
  disabled: PropTypes.bool,
  bridge: PropTypes.bool,
}

Status.defaultProps = {
  valid: false,
  success: false,
  error: false,
  waiting: false,
  disabled: false,
  bridge: false,
}
