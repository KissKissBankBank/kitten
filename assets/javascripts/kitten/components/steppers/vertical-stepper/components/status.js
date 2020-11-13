import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { pxToRem } from '../../../../helpers/utils/typography'
import COLORS from '../../../../constants/colors-config'
import TYPOGRAPHY from '../../../../constants/typography-config'
import { CheckedIcon } from '../../../../components/icons/checked-icon'
import { WarningIcon } from '../../../../components/icons/warning-icon'
import { WaitingIcon } from '../../../../components/icons/waiting-icon'
import { DotIcon } from '../../../../components/icons/dot-icon'
import { LockIcon } from '../../../../components/icons/lock-icon'
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
      variant,
      ...other
    } = this.props

    return (
      <StyledStatus 
        {...other}
        className={classNames(
          {
            'k-Steppers--VerticalStepper__status--valid': valid,
            'k-Steppers--VerticalStepper__status--success': success,
            'k-Steppers--VerticalStepper__status--error': error,
            'k-Steppers--VerticalStepper__status--waiting': waiting,
            'k-Steppers--VerticalStepper__status--disabled': disabled,
          },
          `k-Steppers--VerticalStepper__status--${variant}`,
        )}
      >
        {this.iconByStatus() || children}
      </StyledStatus>
    )
  }

  iconByStatus = () => {
    const { valid, success, error, waiting, disabled, variant } = this.props

    if (success)
    return <CheckedIcon width="10" title={null} />

    if (error)
      return <WarningIcon color={COLORS.error} title={null} />

    if (waiting && variant === 'andromeda')
      return <WaitingIcon height="4" color={COLORS.primary1} title={null} />
      
    if (disabled && variant === 'andromeda')
      return <LockIcon width="10" color={COLORS.background1} title={null} />

    if (valid && variant === 'orion') {
      return <DotIcon width="6" color={COLORS.primary1} title={null} />
    } else if (variant === 'andromeda') {
      return <CheckedIcon width="10" color={COLORS.background1} title={null} />
    }

    return null
  }
}

const STATUS_SIZE = 30
const INACTIVE_STATUS_SIZE = 15

export const StyledStatus = styled.span`
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: ${pxToRem(STATUS_SIZE)};
  height: ${pxToRem(STATUS_SIZE)};
  border-radius: ${pxToRem(STATUS_SIZE)};
  box-sizing: border-box;

  margin-right: ${pxToRem(15)};

  background-color: ${COLORS.background1};
  border: ${pxToRem(2)} solid ${COLORS.line1};

  ${TYPOGRAPHY.fontStyles.regular};
  font-size: ${pxToRem(14)};

  &.k-Steppers--VerticalStepper__status--success {
    background-color: ${COLORS.valid};
    border-color: ${COLORS.valid};
  }

  &.k-Steppers--VerticalStepper__status--valid {
    background-color: ${COLORS.primary1};
    border-color: ${COLORS.primary1};
  }

  &.k-Steppers--VerticalStepper__status--error {
    color: ${COLORS.error};
    border-color: ${COLORS.error3};
  }

  &.k-Steppers--VerticalStepper__status--waiting {
    color: ${COLORS.primary1};
    border-color: ${COLORS.primary4};
  }

  &.k-Steppers--VerticalStepper__status--disabled {
    color: ${COLORS.background1};
    border-color: ${COLORS.line2};
    background-color: ${COLORS.line2};
  }

  &.k-Steppers--VerticalStepper__status--orion {
    border: ${pxToRem(3)} solid ${COLORS.line1};

    &.k-Steppers--VerticalStepper__status--success {
      background-color: ${COLORS.primary1};
      border-color: ${COLORS.primary1};

      :before {
        width: ${pxToRem(35)};
        height: ${pxToRem(35)};
        border-radius: ${pxToRem(35)};
        background-color: ${COLORS.background1};
      }
    }

    &.k-Steppers--VerticalStepper__status--valid {
      background-color: ${COLORS.background1};
      border-color: ${COLORS.primary1};
    }

    &.k-Steppers--VerticalStepper__status--waiting {
      background-color: ${COLORS.background1};
      border-color: ${COLORS.line1};
    }
  
    &.k-Steppers--VerticalStepper__status--disabled {
      background-color: ${COLORS.background1};
      border-color: ${COLORS.line1};
      width: ${pxToRem(INACTIVE_STATUS_SIZE)};
      height: ${pxToRem(INACTIVE_STATUS_SIZE)};
      border-radius: ${pxToRem(INACTIVE_STATUS_SIZE)};
    }
  }
  
`

Status.propTypes = {
  valid: PropTypes.bool,
  success: PropTypes.bool,
  error: PropTypes.bool,
  waiting: PropTypes.bool,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['andromeda', 'orion']),
}

Status.defaultProps = {
  valid: false,
  success: false,
  error: false,
  waiting: false,
  disabled: false,
  variant: 'orion',
}
