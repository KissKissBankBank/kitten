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
  .k-Form-TextInputWithButton__button {
    ${TYPOGRAPHY.fontStyles.regular};
    font-size: ${stepToRem(-1)};
    line-height: 1.3;
    flex: 1 0 auto;
    appearance: none;
    cursor: pointer;
  }

  &:not(.k-Form-TextInputWithButton--insetButton) {
    display: flex;

    .k-Form-TextInputWithButton__input {
      border-right: 0;
    }

    .k-Form-TextInputWithButton__button {
      border-radius: 0;
      padding: 0 ${pxToRem(30)};
      ${({ modifier }) => modifierStyles(modifier)};
    }

    &.k-Form-TextInputWithButton--roudedButton {
      .k-Form-TextInputWithButton__input {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
      .k-Form-TextInputWithButton__button {
        border-top-right-radius: var(--text-input-size);
        border-bottom-right-radius: var(--text-input-size);
      }
    }
  }

  &.k-Form-TextInputWithButton--insetButton {
    position: relative;

    .k-Form-TextInputWithButton__input {
      padding-right: calc(var(--text-input-size) + ${pxToRem(15)});
    }

    .k-Form-TextInputWithButton__button {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: ${pxToRem(4)};
      bottom: ${pxToRem(4)};
      right: ${pxToRem(4)};
      min-width: calc(var(--text-input-size) - ${pxToRem(4)} * 2);
      border-radius: var(--text-input-button-radius);

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
        outline: ${COLORS.primary4} solid ${pxToRem(2)};
        outline-offset: ${pxToRem(2)};
      }
      &:focus:not(:focus-visible) {
        outline-color: transparent;
      }
      &:focus-visible {
        outline-color: ${COLORS.primary4};
      }
    }

    .k-Form-TextInput--orion + .k-Form-TextInputWithButton__button {
      --text-input-button-radius: ${pxToRem(4)};
    }

    .k-Form-TextInput--big + .k-Form-TextInputWithButton__button,
    .k-Form-TextInput--huge + .k-Form-TextInputWithButton__button,
    .k-Form-TextInput--giant + .k-Form-TextInputWithButton__button {
      --text-input-button-radius: ${pxToRem(6)};

      @media (min-width: ${ScreenConfig.M.min}px) {
        --text-input-button-radius: ${pxToRem(8)};
      }
    }

    &.k-Form-TextInputWithButton--roudedButton .k-Form-TextInputWithButton__button {
      --text-input-button-radius: var(--text-input-size);
    }
  }

  &.k-Form-TextInputWithButton--tiny {
    --text-input-size: ${pxToRem(40)};
  }

  &.k-Form-TextInputWithButton--regular {
    --text-input-size: ${pxToRem(50)};
  }

  &.k-Form-TextInputWithButton--big {
    --text-input-size: ${pxToRem(60)};

    @media (min-width: ${ScreenConfig.M.min}px) {
      --text-input-size: ${pxToRem(70)};
    }
  }

  &.k-Form-TextInputWithButton--huge {
    --text-input-size: ${pxToRem(70)};

    @media (min-width: ${ScreenConfig.M.min}px) {
      --text-input-size: ${pxToRem(80)};
    }
  }

  &.k-Form-TextInputWithButton--giant {
    --text-input-size: ${pxToRem(70)};

    @media (min-width: ${ScreenConfig.M.min}px) {
      --text-input-size: ${pxToRem(90)};
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
  }
`

export const TextInputWithButton = React.forwardRef(
  (
    {
      valid,
      error,
      disabled,
      size,
      value,
      rounded,
      buttonValue,
      modifier,
      buttonProps,
      inputValue,
      className,
      inset,
      ...others
    },
    ref,
  ) => (
    <StyledTextInputWithButton
      className={classNames(
        'k-Form-TextInputWithButton',
        `k-Form-TextInputWithButton--${size}`,
        {
          'k-Form-TextInputWithButton--insetButton': inset,
          'k-Form-TextInputWithButton--roudedButton': rounded,
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
        rounded={rounded}
        value={inputValue}
        ref={ref || null}
      />
      <button
        type="button"
        {...buttonProps}
        className={classNames(
          'k-Form-TextInputWithButton__button',
          buttonProps?.className,
          {
            'k-Form-TextInputWithButton__button--valid': valid,
            'k-Form-TextInputWithButton__button--error': error,
            'k-Form-TextInputWithButton__button--disabled': disabled,
          },
        )}
        disabled={disabled}
      >
        {value || buttonValue}
      </button>
    </StyledTextInputWithButton>
  ),
)

TextInputWithButton.propTypes = {
  valid: PropTypes.bool,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.string,
  rounded: PropTypes.bool,
  inset: PropTypes.bool,
  modifier: PropTypes.string,
  inputValue: PropTypes.string,
  // DEPRECATED: do not use prop `value`. Use `buttonValue` instead.
  value: deprecated(PropTypes.node, 'Use `buttonValue` instead.'),
  buttonValue: PropTypes.node,
}

TextInputWithButton.defaultProps = {
  valid: false,
  error: false,
  disabled: false,
  size: 'regular',
  buttonValue: 'Button',
  buttonProps: {},
  modifier: 'beryllium',
  rounded: false,
  inset: false,
}
