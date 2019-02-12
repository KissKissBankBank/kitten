import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { pxToRem } from '../../../../helpers/utils/typography'
import COLORS from '../../../../constants/colors-config'
import TYPOGRAPHY from '../../../../constants/typography-config'
import { CheckedIcon } from '../../../../components/icons/checked-icon'
import { WarningIcon } from '../../../../components/icons/warning-icon'
import { WaitingIcon } from '../../../../components/icons/waiting-icon'

export class Status extends Component {
  static propTypes = {
    valid: PropTypes.bool,
    success: PropTypes.bool,
    error: PropTypes.bool,
    waiting: PropTypes.bool,
  }

  static defaultProps = {
    valid: false,
    success: false,
    error: false,
    waiting: false,
  }

  render() {
    const { children, ...other } = this.props

    return (
      <StyledStatus {...other}>{this.iconByStatus() || children}</StyledStatus>
    )
  }

  iconByStatus = () => {
    const { valid, success, error, waiting } = this.props

    if (valid) return <CheckedIcon width="10" title={null} />
    if (success) return <CheckedIcon width="10" title={null} />
    if (error) return <WarningIcon color={COLORS.error} title={null} />
    if (waiting) return <WaitingIcon color={COLORS.primary1} title={null} />

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

  ${({ success }) =>
    success &&
    css`
      background-color: ${COLORS.valid};
      border-color: ${COLORS.valid};
    `}

  ${({ valid }) =>
    valid &&
    css`
      background-color: ${COLORS.primary1};
      border-color: ${COLORS.primary1};
    `}

  ${({ error }) =>
    error &&
    css`
      color: ${COLORS.error};
      border-color: ${COLORS.error3};
    `}

  ${({ waiting }) =>
    waiting &&
    css`
      color: ${COLORS.primary1};
      border-color: ${COLORS.primary4};
    `}
`
