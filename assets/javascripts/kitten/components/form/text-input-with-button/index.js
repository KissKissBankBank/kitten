import React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import { TextInput } from '../../../components/form/text-input'
import PropTypes from 'prop-types'
import TYPOGRAPHY from '../../../constants/typography-config'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import COLORS from '../../../constants/colors-config'
import { modifierStyles } from '../../../components/buttons/button/helpers/modifier-styles'
import deprecated from 'prop-types-extra/lib/deprecated'

const StyledTextInputWithButton = styled.div`
  display: flex;

  .k-Form-TextInputWithButton--input {
    border-right: 0;
  }

  .k-Form-TextInputWithButton--button {
    ${TYPOGRAPHY.fontStyles.regular};
    font-size: ${stepToRem(-1)};
    line-height: 1.3;
    flex: 1 0 auto;
    appearance: none;
    cursor: pointer;
    padding: 0 ${pxToRem(30)};
    border-radius: 0;

    ${({ modifier }) => modifierStyles(modifier)};
  }

  &.k-Form-TextInputWithButton--button__valid {
    background-color: ${COLORS.valid};
    border-color: ${COLORS.valid};
  }
      
  &.k-Form-TextInputWithButton--button__error {
    background-color: ${COLORS.error};
    border-color: ${COLORS.error};

    input:invalid:not(:focus) + & {
      background-color: ${COLORS.error};
      border-color: ${COLORS.error};
    }
  }
  
  &.k-Form-TextInputWithButton--button__error {
    cursor: not-allowed;
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
  ...others
}) => {

  return (
    <StyledTextInputWithButton>
      <TextInput
        className={classNames(
          'k-Form-TextInputWithButton--input',
          className,
        )}
        {...others}
        valid={valid}
        error={error}
        disabled={disabled}
        size={size}
        value={inputValue}
      />
      <button
        className={classNames(
          'k-Form-TextInputWithButton--button',
          // ...buttonProps.className,
          {
            'k-Form-TextInputWithButton--button__valid': valid,
            'k-Form-TextInputWithButton--button__error': error,
            'k-Form-TextInputWithButton--button__disabled': disabled,
          }
        )}
        type="button"
        modifier={modifier}
        {...buttonProps}
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
}

TextInputWithButton.defaultProps = {
  valid: false,
  error: false,
  disabled: false,
  size: null,
  buttonValue: 'Button',
  modifier: 'beryllium',
}
