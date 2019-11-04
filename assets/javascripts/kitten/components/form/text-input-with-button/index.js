import React, { PureComponent } from 'react'
import styled, { css } from 'styled-components'
import { TextInput } from '../../../components/form/text-input'
import PropTypes from 'prop-types'
import TYPOGRAPHY from '../../../constants/typography-config'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import COLORS from '../../../constants/colors-config'
import { modifierStyles } from '../../../components/buttons/button/helpers/modifier-styles'

const StyledTextInputWithButton = styled.div`
  display: flex;
`

const StyledTextInput = styled(TextInput)`
  border-right: 0;
`

const StyledButton = styled.button`
  ${TYPOGRAPHY.fontStyles.regular};
  font-size: ${stepToRem(-1)};
  line-height: 1.3;
  flex: 1 0 auto;
  outline: none;
  appearance: none;
  cursor: pointer;
  padding: 0 ${pxToRem(30)};
  border-radius: 0;

  ${({ modifier }) => modifierStyles(modifier)};

  ${({ valid }) =>
    valid &&
    css`
      background-color: ${COLORS.valid};
      border-color: ${COLORS.valid};
    `}

  ${({ error }) =>
    error &&
    css`
      background-color: ${COLORS.error};
      border-color: ${COLORS.error};
    `}

  input:invalid:not(:focus) + & {
    background-color: ${COLORS.error};
    border-color: ${COLORS.error};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
    `}
`

export class TextInputWithButton extends PureComponent {
  static propTypes = {
    valid: PropTypes.bool,
    error: PropTypes.bool,
    disabled: PropTypes.bool,
    tiny: PropTypes.bool,
    modifier: PropTypes.string,
    value: PropTypes.string,
  }

  static defaultProps = {
    valid: false,
    error: false,
    disabled: false,
    tiny: false,
    value: 'Button',
    modifier: 'beryllium',
  }

  render() {
    const {
      valid,
      error,
      disabled,
      tiny,
      value,
      modifier,
      buttonProps,
      ...others
    } = this.props

    return (
      <StyledTextInputWithButton>
        <StyledTextInput
          {...others}
          valid={valid}
          error={error}
          disabled={disabled}
          tiny={tiny}
        />
        <StyledButton
          type="button"
          modifier={modifier}
          valid={valid}
          error={error}
          disabled={disabled}
          {...buttonProps}
        >
          {value}
        </StyledButton>
      </StyledTextInputWithButton>
    )
  }
}
