import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled from 'styled-components'
import COLORS from '../../../constants/colors-config'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import TYPOGRAPHY from '../../../constants/typography-config'
import domElementHelper from '../../../helpers/dom/element-helper'

const StyledPillNumberInput = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: stretch;
  height: ${pxToRem(40)};
  width: ${pxToRem(85)};
  padding: 0 ${pxToRem(10)};
  border: 2px solid ${COLORS.line1};
  border-radius: ${pxToRem(20)};
  transition: border-color .2s ease;

  &:focus-within, &:hover {
    border-color: ${COLORS.line2};
  }

  &, & * {
    box-sizing: border-box;
  }

  .k-PillNumberInput__input {
    flex: 1 1 auto;
    appearance: none;
    appearance: textfield;
    border: 0;
    min-width: 0;

    ${TYPOGRAPHY.fontStyles.regular}
    font-size: ${stepToRem(-1)};
    text-align: center;

    &:focus {
      outline: none;
    }

    &:disabled {
      background-color: ${COLORS.background1};
      color: ${COLORS.font2};
    }
  }

  .k-PillNumberInput__minusButton,
  .k-PillNumberInput__plusButton {
    flex: 0 0 auto;
    padding: 0 ${pxToRem(5)};
    border: none;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    cursor: pointer;

    svg {
      transition: fill .2s ease;
    }

    &:hover svg {
      fill: ${COLORS.primary1};
    }
    &:active svg {
      fill: ${COLORS.primary2};
    }

    &:disabled svg {
      fill: ${COLORS.line2};
    }
  }

  &.k-PillNumberInput--disableInput .k-PillNumberInput__input:disabled {
    background-color: ${COLORS.background1};
    color: ${COLORS.font1};
  }
`

const nativeInputValueSetter =
  domElementHelper.canUseDom() &&
  Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')
    .set

export const PillNumberInput = ({
  onChange = () => {},
  value = 1,
  step = 1,
  min = 0,
  max = 99,
  inputProps = {},
  minusButtonProps = {},
  plusButtonProps = {},
  className = null,
  disableInput = false,
  disabled = false,
  ...props
}) => {
  const inputRef = useRef(null)
  const [currentValue, setCurrentValue] = useState(value)
  const changeEvent = new Event('change', { bubbles: true })

  const handleKeyDown = keyDownEvent => {
    if (keyDownEvent.key === 'ArrowUp' && inputRef.current.value < max) {
      plusOne()
    }
    if (keyDownEvent.key === 'ArrowDown' && inputRef.current.value > min) {
      minusOne()
    }
  }

  const plusOne = () => setResult(parseInt(inputRef.current.value, 10) + step)
  const minusOne = () => setResult(parseInt(inputRef.current.value, 10) - step)

  const setResult = result => {
    if (result !== NaN) {
      setCurrentValue(result)
    } else {
      setCurrentValue(value)
    }
  }

  const handleChange = changeEvent => {
    const inputValue = changeEvent.target.value

    if (!inputValue) {
      changeEvent.target.value = 0
    }

    if (parseInt(inputValue, 10) > max) {
      changeEvent.target.value = max
    }

    if (parseInt(inputValue, 10) < min) {
      changeEvent.target.value = min
    }

    if (isNaN(parseInt(inputValue, 10)) || /[^0-9]/.test(inputValue)) {
      changeEvent.target.value = value
    }

    onChange(changeEvent)
  }

  useEffect(() => {
    nativeInputValueSetter &&
      nativeInputValueSetter.call(inputRef.current, currentValue)

    inputRef.current.dispatchEvent(changeEvent)
  }, [currentValue])

  return (
    <StyledPillNumberInput
      className={classNames('k-PillNumberInput', className, {
        'k-PillNumberInput--disableInput': disableInput,
      })}
      {...props}
    >
      <button
        data-button="minus"
        disabled={disabled || currentValue === min}
        onClick={minusOne}
        tabIndex="-1"
        aria-hidden="true"
        {...minusButtonProps}
        className={classNames(
          'k-PillNumberInput__minusButton',
          minusButtonProps.className,
        )}
      >
        <svg
          width="8"
          height="2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 8 2"
        >
          <path d="M0 0h8v2H0z" />
        </svg>
      </button>
      <input
        ref={inputRef}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={currentValue}
        role="spinbutton"
        disabled={disabled || disableInput}
        {...inputProps}
        className={classNames('k-PillNumberInput__input', inputProps.className)}
      />
      <button
        data-button="plus"
        disabled={disabled || currentValue === max}
        onClick={plusOne}
        tabIndex="-1"
        aria-hidden="true"
        {...plusButtonProps}
        className={classNames(
          'k-PillNumberInput__plusButton',
          plusButtonProps.className,
        )}
      >
        <svg
          width="8"
          height="8"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 8 8"
        >
          <path d="M0 3h8v2H0z" />
          <path d="M3 0h2v8h-2z" />
        </svg>
      </button>
    </StyledPillNumberInput>
  )
}

PillNumberInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  inputProps: PropTypes.object,
  minusButtonProps: PropTypes.object,
  plusButtonProps: PropTypes.object,
  disableInput: PropTypes.bool,
  disabled: PropTypes.bool,
}
