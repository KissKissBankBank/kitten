import React, { PureComponent, createRef } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import COLORS from '../../../constants/colors-config'

const borderWidth = pxToRem(2)

const styledTextInput = css`
  font-size: ${stepToRem(-1)};
  line-height: 1.3;
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

  :placeholder {
    color: ${COLORS.font2};
  }

  :focus {
    outline: none;
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
      color: ${COLORS.tertiary2};
      border-color: ${COLORS.tertiary2};

      :focus {
        color: ${COLORS.font1};
        border-color: ${COLORS.line2};
      }
    `}

  ${({ error }) =>
    error &&
    css`
      color: ${COLORS.error3};
      border-color: ${COLORS.error3};

      :focus {
        color: ${COLORS.font1};
        border-color: ${COLORS.line2};
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

const verticalPadding = pxToRem(10)

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

  :disabled + & {
    display: none;
  }
`
export const digitsStyles = digits => {
  const horizontalPadding = pxToRem(15)
  const digitLength = pxToRem(15)

  switch (digits) {
    case 'twoDigits':
      width = horizontalPadding * 2 + digitLength * 2
      textAlign = 'center'
      break
    case 'sixDigits':
      width = horizontalPadding * 2 + digitLength * 6
      break
    case 'twelveDigits':
      width = horizontalPadding * 2 + digitLength * 12
      break
  }
}

export class TextInput extends PureComponent {
  static propTypes = {
    valid: PropTypes.bool,
    error: PropTypes.bool,
    tiny: PropTypes.bool,
    disabled: PropTypes.bool,
    name: PropTypes.text,
    digits: PropTypes.number,
  }

  static defaultProps = {
    tag: 'textarea', // or 'textarea'
    valid: false,
    error: false,
    tiny: false,
    disabled: false,
    name: 'text',
    digits: null,
  }

  constructor(props) {
    super(props)
    this.input = createRef()
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
            ref={this.input.focus && this.input.blur}
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
          ref={this.input.focus && this.input.blur}
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
