import React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import { TextInput } from '../../../components/form/text-input'
import PropTypes from 'prop-types'
import TYPOGRAPHY from '../../../constants/typography-config'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import COLORS from '../../../constants/colors-config'
import { modifierStyles } from '../../../components/molecules/buttons/button/helpers/modifier-styles'
import deprecated from 'prop-types-extra/lib/deprecated'
import { ScreenConfig } from '../../../constants/screen-config'

const StyledTextInputWithButton = styled.div`
  display: flex;

  .k-Form-TextInputWithButton__button {
    ${TYPOGRAPHY.fontStyles.regular};
    font-size: ${stepToRem(-1)};
    line-height: 1.3;
    flex: 1 0 auto;
    appearance: none;
    cursor: pointer;
  }
  &:not(.k-Form-TextInputWithButton--insetButton) {
    .k-Form-TextInputWithButton__input {
      border-right: 0;
    }

    .k-Form-TextInputWithButton__button {
      border-radius: 0;
      padding: 0 ${pxToRem(30)};
      ${({ modifier }) => modifierStyles(modifier)};
    }
  }

  &.k-Form-TextInputWithButton--insetButton {
    position: relative;

    .k-Form-TextInputWithButton__input {

    }
    .k-Form-TextInputWithButton__button {
      position: absolute;
      top: ${pxToRem(4)};
      bottom: ${pxToRem(4)};
      right: ${pxToRem(4)};
      min-width: calc(var(--input-size) - ${pxToRem(4)} * 2);
      border-radius: var(--input-size);

      border: none;
      background-color: ${COLORS.background1};
      transition: background-color 0.2s ease;

      &:hover {
        background-color: ${COLORS.line1};
      }
      &:active {
        background-color: ${COLORS.line2};
      }
      &:focus {
        outline: ${COLORS.font2} solid ${pxToRem(2)};
        outline-offset: ${pxToRem(2)};
      }
      &:focus:not(:focus-visible) {
        outline-color: transparent;
      }
      &:focus-visible {
        outline-color: ${COLORS.font2};
      }
    }

    .k-Form-TextInput--orion + .k-Form-TextInputWithButton__button {
      --input-size: ${pxToRem(4)};

      .k-Form-TextInput--big + .k-Form-TextInputWithButton__button,
      .k-Form-TextInput--huge + .k-Form-TextInputWithButton__button,
      .k-Form-TextInput--giant + .k-Form-TextInputWithButton__button {
        --input-size: ${pxToRem(6)};

        @media (min-width: ${ScreenConfig.M.min}px) {
          --input-size: ${pxToRem(8)};
        }
      }
    }
    .k-Form-TextInput--rounded {
        &.k-Form-TextInput--tiny + .k-Form-TextInputWithButton__button {
          --input-size: ${pxToRem(40)};
        }

        &.k-Form-TextInput--regular + .k-Form-TextInputWithButton__button {
          --input-size: ${pxToRem(50)};
        }

        &.k-Form-TextInput--big + .k-Form-TextInputWithButton__button {
          --input-size: ${pxToRem(60)};

          @media (min-width: ${ScreenConfig.M.min}px) {
            --input-size: ${pxToRem(70)};
            font-size: ${stepToRem(0)};
          }
        }

        &.k-Form-TextInput--huge + .k-Form-TextInputWithButton__button {
          --input-size: ${pxToRem(70)};

          @media (min-width: ${ScreenConfig.M.min}px) {
            --input-size: ${pxToRem(80)};
            font-size: ${stepToRem(0)};
          }
        }

        &.k-Form-TextInput--giant + .k-Form-TextInputWithButton__button {
          --input-size: ${pxToRem(70)};

          @media (min-width: ${ScreenConfig.M.min}px) {
            --input-size: ${pxToRem(90)};
            font-size: ${stepToRem(0)};
          }
        }
    }
  }

  &.k-Form-TextInputWithButton__button--valid {
    background-color: ${COLORS.valid};
    border-color: ${COLORS.valid};
  }

  &.k-Form-TextInputWithButton__button--error {
    cursor: not-allowed;
    background-color: ${COLORS.error};
    border-color: ${COLORS.error};

    input:invalid:not(:focus) + & {
      background-color: ${COLORS.error};
      border-color: ${COLORS.error};
    }
  }
`

export const TextInputWithButton = ({
  valid,
  error,
  disabled,
  size,
  value,
  buttonValue,
  modifier,
  buttonProps,
  inputValue,
  className,
  inset,
  ...others
}) => {
  return (
    <StyledTextInputWithButton
      className={classNames(
        'k-Form-TextInputWithButton',
        {
          'k-Form-TextInputWithButton--insetButton': inset,
        },
      )}
      modifier={modifier}
    >
      <TextInput
        className={classNames('k-Form-TextInputWithButton__input', className)}
        {...others}
        valid={valid}
        error={error}
        disabled={disabled}
        size={size}
        value={inputValue}
      />
      <button
        {...buttonProps}
        className={classNames('k-Form-TextInputWithButton__button', {
          'k-Form-TextInputWithButton__button--valid': valid,
          'k-Form-TextInputWithButton__button--error': error,
          'k-Form-TextInputWithButton__button--disabled': disabled,
        })}
        type="button"
        disabled={disabled}
      >
        {value || buttonValue}
      </button>
    </StyledTextInputWithButton>
  )
}

TextInputWithButton.propTypes = {
  valid: PropTypes.bool,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.string,
  modifier: PropTypes.string,
  inputValue: PropTypes.string,
  // DEPRECATED: do not use prop `value`. Use `buttonValue` instead.
  value: deprecated(PropTypes.node, 'Use `buttonValue` instead.'),
  buttonValue: PropTypes.node,
  inset: PropTypes.bool,
}

TextInputWithButton.defaultProps = {
  valid: false,
  error: false,
  disabled: false,
  size: 'regular',
  buttonValue: 'Button',
  modifier: 'beryllium',
  inset: false,
}
