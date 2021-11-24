import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled from 'styled-components'
import isUndefined from 'lodash/fp/isUndefined'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import COLORS from '../../../constants/colors-config'
import TYPOGRAPHY from '../../../constants/typography-config'
import { nativeInputValueSetter } from '../../../helpers/dom/native-input-value-setter'
import { createEvent } from '../../../helpers/dom/create-event'
import { ScreenConfig } from '../../../constants/screen-config'

const StyledRangeSlider = styled.div`
  --range-thumb-position: calc(
    ${pxToRem(20)} + var(--range-input-ratio) * (100% - (2 * ${pxToRem(20)}))
  );
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    height: ${pxToRem(4)};
    left: 0;
    top: ${pxToRem(13)};
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
    height: ${pxToRem(30)};
    margin: 0;
    padding: 0;
    z-index: 2;
    background: transparent;
    display: block;

    &::-moz-range-track {
      width: 100%;
      height: ${pxToRem(30)};
      cursor: pointer;
      background: transparent;
    }
    &::-moz-range-thumb {
      height: ${pxToRem(30)};
      width: ${pxToRem(40 + 2 * 2)};
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
      border-radius: var(--border-radius-xl);
    }

    &::-webkit-slider-runnable-track {
      width: 100%;
      height: ${pxToRem(30)};
      cursor: pointer;
      background: transparent;
    }
    &::-webkit-slider-thumb {
      height: ${pxToRem(30)};
      width: ${pxToRem(40 + 2 * 2)};
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
      border-radius: var(--border-radius-xl);
    }

    &:active::-moz-range-thumb {
      background-color: ${COLORS.primary2};
    }
    &:active::-webkit-slider-thumb {
      background-color: ${COLORS.primary2};
    }

    &:disabled::-moz-range-track {
      cursor: not-allowed;
    }
    &:disabled::-webkit-slider-runnable-track {
      cursor: not-allowed;
    }
    &:disabled::-moz-range-thumb {
      background-color: ${COLORS.line2};
      cursor: not-allowed;
    }
    &:disabled::-webkit-slider-thumb {
      background-color: ${COLORS.line2};
      cursor: not-allowed;
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
    padding-top: ${pxToRem(20 + 13)};
    &::before,
    &::after {
      top: unset;
      bottom: ${pxToRem(13)};
    }

    .k-RangeSlider__rangeThumbText {
      top: 0;
    }
  }
  &.k-RangeSlider--rangeThumbText-bottom {
    padding-bottom: ${pxToRem(20 + 13)};

    .k-RangeSlider__rangeThumbText {
      bottom: 0;
    }
  }

  &.k-RangeSlider--disabled {
    &::after {
      background: ${COLORS.line2};
    }
    .k-RangeSlider__rangeThumbText {
      color: ${COLORS.font2};
    }
  }

  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    --range-thumb-position: calc(
      ${pxToRem(25)} + var(--range-input-ratio) * (100% - (2 * ${pxToRem(25)}))
    );

    &::before,
    &::after {
      top: ${pxToRem(18)};
    }

    input[type='range'] {
      height: ${pxToRem(40)};

      &::-moz-range-track {
        height: ${pxToRem(40)};
      }
      &::-moz-range-thumb {
        height: ${pxToRem(40)};
        width: ${pxToRem(50 + 2 * 2)};
      }

      &::-webkit-slider-runnable-track {
        height: ${pxToRem(40)};
      }

      &::-webkit-slider-thumb {
        height: ${pxToRem(40)};
        width: ${pxToRem(50 + 2 * 2)};
      }
    }

    &.k-RangeSlider--rangeThumbText-top {
      padding-top: ${pxToRem(10 + 18)};
      &::before,
      &::after {
        top: unset;
        bottom: ${pxToRem(18)};
      }

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
  }
`

export const RangeSlider = ({
  disabled,
  onChange,
  initialValue,
  wrapperProps,
  rangeThumbText,
  rangeThumbPosition,
  value,
  ...props
}) => {
  const [inputRatio, setInputRatio] = useState(0)
  const inputEl = useRef(null)
  const changeEvent = createEvent('change')
  const isControlled = !isUndefined(value)
  const addProps = isControlled ? { value } : {}

  useEffect(() => {
    if (isControlled) {
      setInputRatio(getRatioFrom(value))
    }
  }, [])

  useEffect(() => {
    if (isControlled) return
    inputEl?.current &&
      nativeInputValueSetter &&
      nativeInputValueSetter.call(inputEl.current, initialValue)

    inputEl?.current && inputEl.current.dispatchEvent(changeEvent)
  }, [initialValue, inputEl])

  const getRatioFrom = value => {
    const { min, max } = props
    return Math.min(1, (value - min) / (max - min))
  }

  const handleChange = event => {
    setInputRatio(getRatioFrom(event.target.value))
    onChange(event)
  }

  return (
    <StyledRangeSlider
      style={{ '--range-input-ratio': inputRatio }}
      className={classNames('k-RangeSlider', {
        'k-RangeSlider--disabled': disabled,
        'k-RangeSlider--rangeThumbText-top':
          rangeThumbText && rangeThumbPosition === 'top',
        'k-RangeSlider--rangeThumbText-bottom':
          rangeThumbText && rangeThumbPosition === 'bottom',
      })}
      {...wrapperProps}
    >
      <input
        disabled={disabled}
        ref={inputEl}
        type="range"
        onChange={handleChange}
        {...props}
        {...addProps}
      />
      {rangeThumbText && (
        <span className="k-RangeSlider__rangeThumbText">{rangeThumbText}</span>
      )}
    </StyledRangeSlider>
  )
}

RangeSlider.propTypes = {
  disabled: PropTypes.bool,
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
  disabled: false,
  initialValue: 0,
  min: 0,
  max: 100,
  step: 1,
  onChange: () => {},
  wrapperProps: {},
  rangeThumbText: null,
  rangeThumbPosition: 'bottom',
}
