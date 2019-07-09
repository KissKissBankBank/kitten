import React, { PureComponent, createRef } from 'react'
import styled, { css } from 'styled-components'
import { TextInput } from '../../../components/form/text-input'
import PropTypes from 'prop-types'
import TYPOGRAPHY from '../../../constants/typography-config'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import COLORS from '../../../constants/colors-config'

const StyledTextInputWithUnit = styled.div`
  display: flex;
  width: 1%;

  ${({ digits }) =>
    !digits &&
    css`
      width: 100%;
    `}
`

const StyledTextInput = styled(TextInput)`
  transition: all 0.2s;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    margin: 0;
    -webkit-appearance: none;
  }
`

const StyledInputUnit = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.background1};
  border: ${pxToRem(2)} solid ${COLORS.line1};
  border-left: 0;
  border-radius: 0;
  box-sizing: border-box;
  padding: 0 ${pxToRem(15)};
  color: ${COLORS.font1};
  white-space: nowrap;
  transition: all .2s;
  font-size: ${stepToRem(0)};
  ${TYPOGRAPHY.fontStyles.regular};

  :focus {
    border-color: ${COLORS.line2};
    color: ${COLORS.font1};
  }

  ${({ valid }) =>
    valid &&
    css`
      border-color: ${COLORS.tertiary2};
      color: ${COLORS.valid};
    `}

  ${({ error }) =>
    error &&
    css`
      border-color: ${COLORS.error3};
      color: ${COLORS.error};
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      color: ${COLORS.font2};
      background-color: ${COLORS.line1};
    `}

  ${({ tiny }) =>
    tiny &&
    css`
      padding: 0 ${pxToRem(10)};
    `}

  ${({ unitWord }) =>
    unitWord &&
    css`
      font-size: ${stepToRem(-1)};
    `}

  ${StyledTextInput}:focus + & {
    border-color: ${COLORS.line2};
    color: ${COLORS.font1};
  }
`

export class TextInputWithUnit extends PureComponent {
  static propTypes = {
    type: PropTypes.string,
    valid: PropTypes.bool,
    error: PropTypes.bool,
    tiny: PropTypes.bool,
    disabled: PropTypes.bool,
    unit: PropTypes.string,
    unitWord: PropTypes.bool,
    textInputProps: PropTypes.shape({
      digits: PropTypes.number,
      tag: PropTypes.string,
    }),
  }

  static defaultProps = {
    unit: 'λ',
    unitWord: false,
    type: 'number',
    valid: false,
    error: false,
    tiny: false,
    disabled: false,
    textInputProps: {
      digits: null,
      tag: 'input',
    },
  }

  constructor(props) {
    super(props)
    this.input = createRef()
  }

  render() {
    const {
      type,
      valid,
      error,
      tiny,
      disabled,
      unit,
      unitWord,
      textInputProps,
      ...others
    } = this.props

    return (
      <StyledTextInputWithUnit>
        <StyledTextInput
          {...textInputProps}
          ref={this.input}
          type={type}
          valid={valid}
          error={error}
          tiny={tiny}
          disabled={disabled}
        />
        <StyledInputUnit
          valid={valid}
          error={error}
          disabled={disabled}
          tiny={tiny}
        >
          {unit || unitWord}
        </StyledInputUnit>
      </StyledTextInputWithUnit>
    )
  }
}
