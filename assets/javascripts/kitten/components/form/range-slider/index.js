import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { pxToRem } from '../../../helpers/utils/typography'
import COLORS from '../../../constants/colors-config'
import domElementHelper from '../../../helpers/dom/element-helper'

const StyledRangeSlider = styled.div`
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    height: ${pxToRem(4)};
    left: 0;
    top: ${pxToRem(18)};
    width: 100%;
    background: ${COLORS.line1};
    z-index: 1;
    pointer-events: none;
  }

  &::after {
    width: calc(
      ${pxToRem(25)} + var(--range-input-ratio) * (100% - (2 * ${pxToRem(25)}))
    );
    background: ${COLORS.primary1};
  }

  input[type='range'] {
    position: relative;
    appearance: none;
    width: 100%;
    height: ${pxToRem(40)};
    margin: 0;
    padding: 0;
    z-index: 2;
    background: transparent;

    &::-moz-range-track {
      width: 100%;
      height: ${pxToRem(40)};
      cursor: pointer;
      background: transparent;
    }
    &::-moz-range-thumb {
      height: ${pxToRem(40)};
      width: ${pxToRem(50)};
      box-sizing: border-box;
      background-color: ${COLORS.primary1};
      background-image: url("data:image/svg+xml,%3Csvg height='10' width='10' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'%3E%3Cpath fill='%23fff' d='M0 0 h 2 V 10 h -2 z M4 0 h 2 V 10 h -2 z M8 0 h 2 V 10 h -2 z' /%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: 50% 50%;
      cursor: pointer;
      -moz-appearance: none;
      appearance: none;
      border: ${pxToRem(2)} solid ${COLORS.background1};
      border-radius: ${pxToRem(20)};
    }

    &::-webkit-slider-runnable-track {
      width: 100%;
      height: ${pxToRem(40)};
      cursor: pointer;
      background: transparent;
    }
    &::-webkit-slider-thumb {
      height: ${pxToRem(40)};
      width: ${pxToRem(50)};
      box-sizing: border-box;
      background-color: ${COLORS.primary1};
      background-image: url("data:image/svg+xml,%3Csvg height='10' width='10' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'%3E%3Cpath fill='%23fff' d='M0 0 h 2 V 10 h -2 z M4 0 h 2 V 10 h -2 z M8 0 h 2 V 10 h -2 z' /%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: 50% 50%;
      cursor: pointer;
      -webkit-appearance: none;
      appearance: none;
      border: ${pxToRem(2)} solid ${COLORS.background1};
      border-radius: ${pxToRem(20)};
    }
  }
`

const nativeInputValueSetter =
  domElementHelper.canUseDom() &&
  Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')
    .set

export const RangeSlider = ({
  onChange,
  initialValue,
  wrapperProps,
  ...props
}) => {
  const [inputRatio, setInputRatio] = useState(0)
  const inputEl = useRef(null)
  const changeEvent = new Event('change', { bubbles: true })

  useEffect(() => {
    inputEl &&
      nativeInputValueSetter &&
      nativeInputValueSetter.call(inputEl.current, initialValue)

    inputEl && inputEl.current.dispatchEvent(changeEvent)
  }, [initialValue, inputEl])

  const getRatioFrom = value => {
    const { min, max } = props
    return (value - min) / (max - min)
  }

  const handleChange = event => {
    setInputRatio(getRatioFrom(event.target.value))
    onChange(event)
  }

  return (
    <StyledRangeSlider
      style={{ '--range-input-ratio': inputRatio }}
      {...wrapperProps}
    >
      <input ref={inputEl} type="range" onChange={handleChange} {...props} />
    </StyledRangeSlider>
  )
}

RangeSlider.propTypes = {
  initialValue: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  name: PropTypes.string,
  onChange: PropTypes.func,
  wrapperProps: PropTypes.object,
}

RangeSlider.defaultProps = {
  initialValue: 0,
  min: 0,
  max: 100,
  step: 1,
  onChange: () => {},
  wrapperProps: {},
}
