import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled from 'styled-components'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import COLORS from '../../../constants/colors-config'
import TYPOGRAPHY from '../../../constants/typography-config'
import { nativeInputValueSetter } from '../../../helpers/dom/native-input-value-setter'
import { createEvent } from '../../../helpers/dom/create-event'

const StyledRangeSlider = styled.div`
  --range-thumb-position: calc(
      ${pxToRem(25)} + var(--range-input-ratio) * (100% - (2 * ${pxToRem(25)}))
    );
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
    width: var(--range-thumb-position);
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
    display: block;

    &:focus {
      outline: ${COLORS.primary4} solid ${pxToRem(2)};
      outline-offset: ${pxToRem(2)};
    }

    &::-moz-range-track {
      width: 100%;
      height: ${pxToRem(40)};
      cursor: pointer;
      background: transparent;
    }
    &::-moz-range-thumb {
      height: ${pxToRem(40)};
      width: ${pxToRem(50 + 2 * 2)};
      box-sizing: border-box;
      background-color: ${COLORS.primary1};
      background-image: url("data:image/svg+xml,%3Csvg height='10' width='10' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'%3E%3Cpath fill='%23fff' d='M0 0 h 2 V 10 h -2 z M4 0 h 2 V 10 h -2 z M8 0 h 2 V 10 h -2 z' /%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: 50% 50%;
      cursor: pointer;
      -moz-appearance: none;
      appearance: none;
      border: ${pxToRem(2)} solid ${COLORS.background1};
      border-top: 0;
      border-bottom: 0;
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
      width: ${pxToRem(50 + 2 * 2)};
      box-sizing: border-box;
      background-color: ${COLORS.primary1};
      background-image: url("data:image/svg+xml,%3Csvg height='10' width='10' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'%3E%3Cpath fill='%23fff' d='M0 0 h 2 V 10 h -2 z M4 0 h 2 V 10 h -2 z M8 0 h 2 V 10 h -2 z' /%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: 50% 50%;
      cursor: pointer;
      -webkit-appearance: none;
      appearance: none;
      border: ${pxToRem(2)} solid ${COLORS.background1};
      border-top: 0;
      border-bottom: 0;
      border-radius: ${pxToRem(20)};
    }

    &:active::-moz-range-thumb {
      background-color: ${COLORS.primary2};
    }
    &:active::-webkit-slider-thumb {
      background-color: ${COLORS.primary2};
    }
  }

  .k-RangeSlider__rangeThumbText {
    position: absolute;
    ${TYPOGRAPHY.fontStyles.regular}
    font-size: ${stepToRem(-1)};
    line-height: ${pxToRem(18)};
    color: ${COLORS.font1};
    left: calc(var(--range-thumb-position) - ${pxToRem(50)});
    width: ${pxToRem(100)};
    text-align: center;
  }

  &.k-RangeSlider--rangeThumbText-top {
    padding-top: ${pxToRem(10 + 18)};

    .k-RangeSlider__rangeThumbText {
      top: 0;
    }
  }
  &.k-RangeSlider--rangeThumbText-bottom {
    padding-bottom: ${pxToRem(10 + 18)};

    .k-RangeSlider__rangeThumbText {
      bottom: 0;
    }
  }
`

export const RangeSlider = ({
  onChange,
  initialValue,
  wrapperProps,
  rangeThumbText,
  rangeThumbPosition,
  ...props
}) => {
  const [inputRatio, setInputRatio] = useState(0)
  const inputEl = useRef(null)
  const changeEvent = createEvent('change')

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
      className={classNames('k-RangeSlider', {
        'k-RangeSlider--rangeThumbText-top':
          rangeThumbText && rangeThumbPosition === 'top',
        'k-RangeSlider--rangeThumbText-bottom':
          rangeThumbText && rangeThumbPosition === 'bottom',
      })}
      {...wrapperProps}
    >
      <input ref={inputEl} type="range" onChange={handleChange} {...props} />
      {rangeThumbText && (
        <span className="k-RangeSlider__rangeThumbText">{rangeThumbText}</span>
      )}
    </StyledRangeSlider>
  )
}

RangeSlider.propTypes = {
  initialValue: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  wrapperProps: PropTypes.object,
  rangeThumbText: PropTypes.node,
  rangeThumbPosition: PropTypes.oneOf(['top', 'bottom']),
}

RangeSlider.defaultProps = {
  initialValue: 0,
  min: 0,
  max: 100,
  step: 1,
  onChange: () => {},
  wrapperProps: {},
  rangeThumbText: null,
  rangeThumbPosition: 'bottom',
}
