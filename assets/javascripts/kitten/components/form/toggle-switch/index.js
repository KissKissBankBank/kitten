import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import COLORS from '../../../constants/colors-config'
import TYPOGRAPHY from '../../../constants/typography-config'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'

const transitionDuration = '.15s'
const switchWidth = 60
const switchHeight = 30
const borderSize = 2
const borderRadius = 18

const StyledSwitchContainer = styled.div`
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      cursor: not-allowed;
    `}

  ${({ reverseOrder }) =>
    reverseOrder &&
    css`
      flex-direction: row-reverse;

      & ${StyledLabel} {
        padding-right: ${pxToRem(10)};
        padding-left: 0;
      }
    `}
`
const StyledSwitch = styled.button`
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  width: ${pxToRem(switchWidth)};
  height: ${pxToRem(switchHeight)};
  color: ${({ defaultColor }) => defaultColor};
  background-color: currentColor;
  border: ${pxToRem(borderSize)} solid ${COLORS.line2};
  border-radius: ${pxToRem(borderRadius)};
  transition: color ${transitionDuration} ease,
    border-color ${transitionDuration} ease,
    background-color ${transitionDuration} ease;
  cursor: pointer;

  &:focus {
    border-color: ${COLORS.primary1};
    box-shadow: 0 0 0 ${pxToRem(2)} ${COLORS.primary4};
    outline: none;
  }

  &::before {
    position: absolute;
    box-sizing: border-box;
    display: inline-block;
    left: -${pxToRem(borderSize)};
    top: -${pxToRem(borderSize)};
    width: ${pxToRem(switchHeight)};
    height: ${pxToRem(switchHeight)};
    content: '';
    background-color: ${COLORS.background1};
    border: ${pxToRem(borderSize)} solid ${COLORS.line2};
    border-radius: ${pxToRem(switchHeight)};
    transition: left ${transitionDuration} ease,
      color ${transitionDuration} ease, border-color ${transitionDuration} ease,
      background-color ${transitionDuration} ease;
  }

  &[aria-pressed='true'] {
    color: ${({ checkedColor }) => checkedColor};
    border-color: currentColor;

    &::before {
      left: ${pxToRem(switchWidth - switchHeight - borderSize)};
      border-color: currentColor;
    }
  }

  &:active {
    color: ${({ activeColor }) => activeColor};
    &,
    &::before {
      border-color: ${({ activeColor }) => activeColor};
    }
  }

  &[disabled] {
    color: ${({ disabledColor }) => disabledColor};
    border-color: currentColor;
    cursor: not-allowed;
  }
`

const StyledLabel = styled.label`
  padding-left: ${pxToRem(10)};
  ${TYPOGRAPHY.fontStyles.light}
  font-size: ${({ big }) => stepToRem(big ? 3 : 0)};
  line-height: ${pxToRem(switchHeight)};
  color: ${COLORS.font1};
  transition: color ${transitionDuration} ease;
  cursor: pointer;

  ::selection { background: transparent; }
  ::-moz-selection { background: transparent; }

  ${StyledSwitchContainer}:hover & {
    color: ${COLORS.primary1};
  }
  ${StyledSwitchContainer}:active & {
    color: ${COLORS.primary3};
  }

  ${StyledSwitchContainer} button[disabled] + & {
    color: ${({ disabledColor }) => disabledColor};
    cursor: not-allowed;
  }
`

export const ToggleSwitch = ({
  activeColor,
  big,
  checkedColor,
  defaultColor,
  disabled,
  disabledColor,
  id,
  isChecked,
  isLabelVisible,
  label,
  labelProps,
  reverseOrder,
  switchProps,
  ...others
}) => {
  const [isPressed, setPressedState] = useState(isChecked)

  return (
    <StyledSwitchContainer
      isDisabled={disabled}
      reverseOrder={reverseOrder}
      {...others}
    >
      <StyledSwitch
        onClick={() => setPressedState(!isPressed)}
        type="button"
        id={id}
        disabled={disabled}
        aria-pressed={isPressed}
        aria-label={isLabelVisible ? null : label}
        checkedColor={checkedColor}
        defaultColor={defaultColor}
        disabledColor={disabledColor}
        activeColor={activeColor}
        {...switchProps}
      />
      {isLabelVisible && (
        <StyledLabel
          for={id}
          disabledColor={disabledColor}
          big={big}
          {...labelProps}
        >
          {label}
        </StyledLabel>
      )}
    </StyledSwitchContainer>
  )
}

ToggleSwitch.defaultProps = {
  activeColor: COLORS.primary3,
  big: false,
  checkedColor: COLORS.primary1,
  defaultColor: COLORS.line1,
  disabled: false,
  disabledColor: COLORS.line2,
  isChecked: false,
  isLabelVisible: true,
  label: 'switch',
  reverseOrder: false,
}

ToggleSwitch.propTypes = {
  activeColor: PropTypes.string,
  big: PropTypes.bool,
  checkedColor: PropTypes.string,
  defaultColor: PropTypes.string,
  disabled: PropTypes.bool,
  disabledColor: PropTypes.string,
  id: PropTypes.string.isRequired,
  isChecked: PropTypes.bool,
  isLabelVisible: PropTypes.bool,
  label: PropTypes.string,
  reverseOrder: PropTypes.bool,
}
