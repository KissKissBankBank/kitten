import React, { useRef } from 'react'
import styled from 'styled-components'
import { TextInput } from '../../../form/input/text-input'
import PropTypes from 'prop-types'
import TYPOGRAPHY from '../../../../constants/typography-config'
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography'
import classNames from 'classnames'

const StyledTextInputWithUnit = styled.div`
  position: relative;
  width: 1%;

  &:not(.k-Form-TextInputWithUnit--hasDigits) {
    width: 100%;
  }

  .k-Form-TextInputWithUnit__input {
    border-radius: var(--border-radius-s);
    padding-right: ${pxToRem(42)};

    &[type='number'] {
      appearance: textfield;

      &::-webkit-inner-spin-button,
      &::-webkit-outer-spin-button {
        margin: 0;
        appearance: none;
      }
    }
  }

  .k-Form-TextInputWithUnit__unit {
    display: flex;
    z-index: 1;
    position: absolute;
    right: ${pxToRem(3)};
    top: ${pxToRem(3)};
    bottom: ${pxToRem(3)};
    min-width: ${pxToRem(40)};
    align-items: center;
    justify-content: center;
    border-radius: 0;
    box-sizing: border-box;
    color: var(--color-grey-900);
    white-space: nowrap;
    transition: all 0.2s;
    font-size: ${stepToRem(0)};
    ${TYPOGRAPHY.fontStyles.regular};
    background-color: var(--color-grey-000);

    &.k-Form-TextInputWithUnit__unit--disabled {
      color: var(--color-grey-700);
      background-color: var(--color-grey-200);
    }
    &.k-Form-TextInputWithUnit__unit--small {
      padding: 0 ${pxToRem(10)};
    }
    &.k-Form-TextInputWithUnit__unit--medium {
      padding: 0 ${pxToRem(12)};
    }
    &.k-Form-TextInputWithUnit__unit--large,
    &.k-Form-TextInputWithUnit__unit--huge {
      padding: 0 ${pxToRem(20)};
    }
    &.k-Form-TextInputWithUnit__unit--giant {
      padding: 0 ${pxToRem(25)};
    }

    &.k-Form-TextInputWithUnit__unit--hasUnitWord {
      font-size: ${stepToRem(-1)};
    }
  }

  &:focus-within {
    .k-Form-TextInputWithUnit__unit {
      border-color: var(--color-grey-500);
      color: var(--color-grey-900);
    }
  }
`

export const TextInputWithUnit = ({
  unit,
  unitWord,
  size,
  digits,
  className,
  valid,
  error,
  disabled,
  wrapperProps,
  ...others
}) => {

  const input = useRef(null)

  return (
    <StyledTextInputWithUnit
      {...wrapperProps}
      className={classNames(
        'k-Form-TextInputWithUnit',
        wrapperProps.className,
        {
          'k-Form-TextInputWithUnit--hasDigits': !!digits,
        },
      )}
    >
      <TextInput
        ref={input}
        {...others}
        valid={valid}
        error={error}
        disabled={disabled}
        size={size}
        className={classNames('k-Form-TextInputWithUnit__input', className)}
      />
      <span
        className={classNames(
          'k-Form-TextInputWithUnit__unit',
          `k-Form-TextInputWithUnit__unit--${size}`,
          {
            'k-Form-TextInputWithUnit__unit--valid': valid,
            'k-Form-TextInputWithUnit__unit--error': error,
            'k-Form-TextInputWithUnit__unit--disabled': disabled,
            'k-Form-TextInputWithUnit__unit--hasUnitWord': !unit && !!unitWord,
          },
        )}
      >
        {unit || unitWord}
      </span>
    </StyledTextInputWithUnit>
  )
}

TextInputWithUnit.propTypes = {
  type: PropTypes.string,
  valid: PropTypes.bool,
  error: PropTypes.bool,
  center: PropTypes.bool,
  disabled: PropTypes.bool,
  unit: PropTypes.string,
  unitWord: PropTypes.bool,
  digits: PropTypes.number,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'huge', 'giant']),
  wrapperProps: PropTypes.object,
}

TextInputWithUnit.defaultProps = {
  unit: 'λ',
  unitWord: false,
  type: 'number',
  valid: false,
  error: false,
  center: false,
  size: 'medium',
  disabled: false,
  digits: null,
  wrapperProps: {},
}
