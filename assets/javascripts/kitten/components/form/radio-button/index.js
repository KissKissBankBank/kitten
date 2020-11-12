import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled from 'styled-components'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import COLORS from '../../../constants/colors-config'
import TYPOGRAPHY from '../../../constants/typography-config'
import { ScreenConfig } from '../../../constants/screen-config'

const StyledRadioButton = styled.label`
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  flex-wrap: wrap;
  cursor: pointer;

  &, & * {
    transition: all .2s ease;
  }

  .k-Form-RadioButton__input {
    appearance: none;

    box-sizing: border-box;
    display: inline-block;
    flex-shrink: 0;
    width: ${pxToRem(16)};
    height: ${pxToRem(16)};
    margin: ${pxToRem(2)} ${pxToRem(10)} 0 0;

    content: '';
    background-color: ${COLORS.background1};
    border: ${pxToRem(2)} solid ${COLORS.line1};
    border-radius: 50%;

    transition: border .1s;

    &:focus {
      outline: none;
      border-color: ${COLORS.primary1};
    }

    &:checked {
      position: relative;
      border: ${pxToRem(5)} solid ${COLORS.primary1};
    }
  }

  &.k-Form-RadioButton--error .k-Form-RadioButton__input {
    border-color: ${COLORS.error3};

    &:checked {
      border-color: ${COLORS.error};
    }
  }

  & .k-Form-RadioButton__input:disabled {
    background-color: ${COLORS.line1};
    border-color: ${COLORS.line2};

    &:checked {
      background-color: ${COLORS.background1};
      border-color: ${COLORS.line2};
    }
  }

  .k-Form-RadioButton__label {
    ${TYPOGRAPHY.fontStyles.light}
    font-size: ${stepToRem(-1)};

    .k-Form-RadioButton__input:disabled + & {
      cursor: not-allowed;
    }

    .k-Form-RadioButton--error & {
      border-color: ${COLORS.error3};
    }
  }

  &:active .k-Form-RadioButton__label,
  .k-Form-RadioButton__label:active,
  .k-Form-RadioButton__input:active + .k-Form-RadioButton__label {
    color: ${COLORS.primary3};
  }

  .k-Form-RadioButton__label--large {
    ${TYPOGRAPHY.fontStyles.regular}
    font-size: ${stepToRem(2)};
  }

  .k-Form-RadioButton__label--withContents {
    ${TYPOGRAPHY.fontStyles.regular}
  }

  .k-Form-RadioButton__labelContents {
    flex: 1 0 100%;
    margin-left: ${pxToRem(16 + 10)};

    ${TYPOGRAPHY.fontStyles.label}
    font-size: ${stepToRem(-2)};

    &:empty {
      display: none;
    }
  }

  .k-Form-RadioButton__labelContents--large {
    font-size: ${stepToRem(-1)};
  }

  &.k-Form-RadioButton--orion {
    box-sizing: border-box;
    padding: ${pxToRem(15)};
    height: ${pxToRem(60)};
    border-radius: ${pxToRem(6)};
    border: 2px solid ${COLORS.line1};

    &:active,
    &:focus-within,
    &:focus,
    &.k-Form-RadioButton--isChecked {
      border-color: ${COLORS.primary1};
    }

    &.k-Form-RadioButton--error {
      border-color: ${COLORS.error3};
    }

    @media (min-width: ${ScreenConfig.S.min}px) {
      height: ${pxToRem(80)};
      border-radius: ${pxToRem(8)};

      .k-Form-RadioButton__input {
        width: ${pxToRem(20)};
        height: ${pxToRem(20)};

        &:checked {
          border-width: ${pxToRem(6)};
        }
      }

      .k-Form-RadioButton__label {
        font-size: ${stepToRem(0)};
      }

      .k-Form-RadioButton__input:disabled + .k-Form-RadioButton__label {
        color: ${COLORS.font2};
      }

    }

    .k-Form-RadioButton__label {
      ${TYPOGRAPHY.fontStyles.regular};
    }
  }
`

export const RadioButton = ({
  className,
  id,
  children,
  inputClassName,
  large,
  largeContent,
  text,
  error,
  disabled,
  variant,
  onChange,
  ...inputProps
}) => {
  const inputEl = useRef(null)
  const [isChecked, setChecked] = useState(false)

  const handleChange = changeEvent => {
    setChecked(inputEl.current.checked)

    onChange(changeEvent)
  }

  return (
    <StyledRadioButton
      htmlFor={id}
      className={classNames(
        'k-Form-RadioButton',
        className,
        `k-Form-RadioButton--${variant}`,
        {
          'k-Form-RadioButton--error': error,
          'k-Form-RadioButton--isChecked': isChecked,
        },
      )}
    >
      <input
        ref={inputEl}
        id={id}
        type="radio"
        className={classNames('k-Form-RadioButton__input', inputClassName)}
        disabled={disabled}
        onChange={handleChange}
        {...inputProps}
      />

      <span
        className={classNames(
          'k-Form-RadioButton__label',
          { 'k-Form-RadioButton__label--large': large },
          { 'k-Form-RadioButton__label--withContents': !!children },
        )}
      >
        {text}
      </span>

      {children && (
        <div
          className={classNames('k-Form-RadioButton__labelContents', {
            'k-Form-RadioButton__labelContents--large': largeContent,
          })}
        >
          {children}
        </div>
      )}
    </StyledRadioButton>
  )
}

RadioButton.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  large: PropTypes.bool,
  largeContent: PropTypes.bool,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['andromeda', 'orion']),
  onChange: PropTypes.func,
}

RadioButton.defaultProps = {
  large: false,
  largeContent: false,
  error: false,
  disabled: false,
  variant: 'andromeda',
  onChange: () => {},
}
