import React from 'react'
import styled from 'styled-components'
import { Button } from '../../../components/buttons/button'
import { pxToRem } from '../../../helpers/utils/typography'
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
`

export const ButtonGroup = ({ className, ...props }) => (
  <StyledButtonGroup
    role="group"
    {...props}
    className={classNames('k-ButtonGroup', className)}
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
