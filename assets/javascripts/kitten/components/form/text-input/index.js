import React, { PureComponent, createRef } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import COLORS from '../../../constants/colors-config'
import TYPOGRAPHY from '../../../constants/typography-config'

const borderWidth = pxToRem(2)
const verticalPadding = pxToRem(10)

const styledTextInput = css`
  font-size: ${stepToRem(-1)};
  line-height: 1.3;
  ${TYPOGRAPHY.fontStyles.light};
  box-sizing: border-box;
  border-width: ${borderWidth};
  border-style: solid;
  border-radius: 0;
  width: 100%;
  height: ${pxToRem(50)};
  padding: ${pxToRem(10)} ${pxToRem(15)};
  appearance: none;
  background-color: ${COLORS.background1};
  color: ${COLORS.font1};
  border-color: ${COLORS.line1};
  outline: none;
  ${({ digits }) => digitsStyles(digits)};

  ::placeholder {
    color: ${COLORS.font2};
  }

  :focus {
    outline: none;
    color: ${COLORS.font1};
    border-color: ${COLORS.line2};
  }

  :disabled {
    color: ${COLORS.font2};
    border-color: ${COLORS.line1};
    background-color: ${COLORS.line1};
    cursor: not-allowed;
  }

  ${({ valid }) =>
    valid &&
    css`
      &:not(:focus) {
        color: ${COLORS.tertiary2};
        border-color: ${COLORS.tertiary2};
      }
    `}

  ${({ error }) =>
    error &&
    css`
      &:not(:focus) {
        color: ${COLORS.error3};
        border-color: ${COLORS.error3};
      }
    `}

  ${({ tiny }) =>
    tiny &&
    css`
      height: ${pxToRem(40)};
    `}
`

const StyledTextarea = styled.div`
  position: relative;
  display: flex;
`

const StyledInput = styled.input`
  ${styledTextInput}
`

const StyledInputTextarea = styled.textarea`
  ${styledTextInput}
  height: initial;
  resize: vertical;

  :disabled {
    resize: none;
  }
`

const StyledGradientTextarea = styled.div`
  position: absolute;
  left: ${verticalPadding};
  right: ${verticalPadding};
  bottom: ${borderWidth};
  height: ${verticalPadding};

  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    ${COLORS.background1}
  );

  pointer-events: none;

  ${StyledInputTextarea}:disabled + & {
    display: none;
  }
`

export const digitsStyles = digits => {
  const horizontalPadding = 15
  const digitLength = 15

  switch (`${digits}`) {
    case '2':
      return css`
        width: ${pxToRem(horizontalPadding * 2 + digitLength * 2)};
        text-align: center;
      `
    case '6':
      return css`
        width: ${pxToRem(horizontalPadding * 2 + digitLength * 6)};
      `
    case '12':
      return css`
        width: ${pxToRem(horizontalPadding * 2 + digitLength * 12)};
      `
  }
}

export class TextInput extends PureComponent {
  static propTypes = {
    tag: PropTypes.string,
    valid: PropTypes.bool,
    error: PropTypes.bool,
    tiny: PropTypes.bool,
    disabled: PropTypes.bool,
    name: PropTypes.string,
    digits: PropTypes.number,
  }

  static defaultProps = {
    tag: 'input', // or 'textarea'
    valid: false,
    error: false,
    tiny: false,
    disabled: false,
    name: 'text',
    digits: null,
  }

  render() {
    const {
      valid,
      error,
      disabled,
      name,
      digits,
      tiny,
      tag,
      ...others
    } = this.props

    if (tag == 'textarea') {
      return (
        <StyledTextarea>
          <StyledInputTextarea
            valid={valid}
            error={error}
            disabled={disabled}
            tiny={tiny}
            digits={digits}
            name={name}
            {...others}
          />
          <StyledGradientTextarea />
        </StyledTextarea>
      )
    } else {
      return (
        <StyledInput
          valid={valid}
          error={error}
          disabled={disabled}
          tiny={tiny}
          digits={digits}
          name={name}
          {...others}
        />
      )
    }
  }
}
