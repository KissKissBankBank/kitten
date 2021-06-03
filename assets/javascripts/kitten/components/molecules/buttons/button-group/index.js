import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button } from '../../../../components/molecules/buttons/button'
import { pxToRem } from '../../../../helpers/utils/typography'
import COLORS from '../../../constants/colors-config'
import classNames from 'classnames'

const borderRadius = pxToRem(4)
const borderSize = pxToRem(2)

const StyledButtonGroup = styled.div`
  display: flex;
  justify-content: center;

  .k-ButtonGroup__button {
    z-index: 0;
    min-width: auto;
    width: auto;

    &:not(:last-child) {
      margin-right: -${borderSize};
    }

    &:first-child {
      border-top-left-radius: ${borderRadius};
      border-bottom-left-radius: ${borderRadius};
    }

    &:last-child {
      border-top-right-radius: ${borderRadius};
      border-bottom-right-radius: ${borderRadius};
    }

    &:active,
    &:hover,
    &:focus,
    &.k-ButtonGroup__button--isActive {
      border-radius: ${borderRadius};
      z-index: 1;
    }
  }

  &.k-ButtonGroup--orion {
    .k-ButtonGroup__button {
      border-radius: ${pxToRem(4)};
      color: ${COLORS.font1};
      border-color: ${COLORS.line1};
      background-color: ${COLORS.background1};

      &:hover,
      &:focus,
      &:active {
        color: ${COLORS.font1};
        border-color: ${COLORS.primary2};
        background-color: ${COLORS.background1};
      }

      &.k-ButtonGroup__button--isActive {
        color: ${COLORS.font1};
        border-color: ${COLORS.primary1};
        background-color: ${COLORS.primary5};
      }

      &:first-child {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }

      &:last-child {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
  }
`

export const ButtonGroup = ({ className, variant, ...props }) => (
  <StyledButtonGroup
    role="group"
    {...props}
    className={classNames(
      'k-ButtonGroup',
      className,
      `k-ButtonGroup--${variant}`,
    )}
  />
)

const ButtonGroupButton = ({ className, active, ...props }) => (
  <Button
    {...props}
    className={classNames('k-ButtonGroup__button', className, {
      'k-ButtonGroup__button--isActive': active,
    })}
  />
)

ButtonGroup.Button = ButtonGroupButton

ButtonGroup.propTypes = {
  variant: PropTypes.oneOf(['andromeda', 'orion']),
  active: PropTypes.bool,
}

ButtonGroup.defaultProps = {
  variant: 'andromeda',
  active: false,
}
