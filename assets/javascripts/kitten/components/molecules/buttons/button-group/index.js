import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button } from '../../../../components/molecules/buttons/button'
import { pxToRem } from '../../../../helpers/utils/typography'
import COLORS from '../../../../constants/colors-config'
import classNames from 'classnames'

const StyledButtonGroup = styled.div`
  display: flex;
  justify-content: center;

  .k-ButtonGroup__button {
    position: relative;
    z-index: 0;
    min-width: auto;
    width: auto;

    &:not(:last-child) {
      margin-right: ${pxToRem(-2)};
    }

    &:first-child {
      border-top-left-radius: var(--border-radius-s);
      border-bottom-left-radius: var(--border-radius-s);
    }

    &:last-child {
      border-top-right-radius: var(--border-radius-s);
      border-bottom-right-radius: var(--border-radius-s);
    }

    &.k-ButtonGroup__button--isActive {
      border-radius: var(--border-radius-s);
      z-index: 1;
    }
    &:active,
    &:hover,
    &:focus {
      border-radius: var(--border-radius-s);
      z-index: 2;
    }
  }

  &.k-ButtonGroup--orion {
    .k-ButtonGroup__button {
      border-radius: var(--border-radius-s);
      color: ${COLORS.font1};
      border: var(--border);
      background-color: ${COLORS.background1};

      &:hover,
      &:focus,
      &:active {
        color: ${COLORS.font1};
        border: var(--border-hover);
        background-color: ${COLORS.background1};
      }

      &.k-ButtonGroup__button--isActive {
        color: ${COLORS.font1};
        border: var(--border-active);
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
}

ButtonGroup.defaultProps = {
  variant: 'orion',
}
