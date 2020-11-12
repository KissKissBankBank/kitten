import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { pxToRem } from '../../../../helpers/utils/typography'
import COLORS from '../../../../constants/colors-config'
import TYPOGRAPHY from '../../../../constants/typography-config'
import { CheckedIcon } from '../../../../components/icons/checked-icon'
import { WarningIcon } from '../../../../components/icons/warning-icon'
import { WaitingIcon } from '../../../../components/icons/waiting-icon'
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
          }
        )}
      >
        {this.iconByStatus() || children}
      </StyledStatus>
    )
  }

  iconByStatus = () => {
    const { valid, success, error, waiting, disabled } = this.props

    if (valid) return <CheckedIcon width="10" title={null} />
    if (success) return <CheckedIcon width="10" title={null} /> 
    if (error) return <WarningIcon color={COLORS.error} title={null} />
    if (waiting)
      return <WaitingIcon height="4" color={COLORS.primary1} title={null} />
    if (disabled)
      return <LockIcon width="10" color={COLORS.background1} title={null} />

    return null
  }
}

const STATUS_SIZE = 30

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
  border: 2px solid ${COLORS.line1};

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
`

Status.propTypes = {
  valid: PropTypes.bool,
  success: PropTypes.bool,
  error: PropTypes.bool,
  waiting: PropTypes.bool,
  disabled: PropTypes.bool,
}

Status.defaultProps = {
  valid: false,
  success: false,
  error: false,
  waiting: false,
  disabled: false,
}