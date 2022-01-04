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
    border-radius: 0;

    &:not(:last-child) {
      margin-right: ${pxToRem(-1)};
    }

    &:first-child {
      border-top-left-radius: var(--border-radius-s);
      border-bottom-left-radius: var(--border-radius-s);
    }

    &:last-child {
      border-top-right-radius: var(--border-radius-s);
      border-bottom-right-radius: var(--border-radius-s);
    }

    &:active,
    &:hover {
      z-index: 1;
    }
    &.k-ButtonGroup__button--isActive {
      z-index: 2;
    }
    &:focus-visible {
      z-index: 3;
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
    active={active}
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
