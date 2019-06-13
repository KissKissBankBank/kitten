import React, { PureComponent, createRef } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import COLORS from '../../../constants/colors-config'

const StyledInput = styled.input`
  font-size: ${stepToRem(-1)};
  font-style: light;
  line-height: 1.3;
  box-sizing: border-box;
  border-width: ${pxToRem(2)};
  border-style: solid;
  border-radius: 0
  width: 100%;
  height: ${pxToRem(50)};
  padding: ${pxToRem(10)} ${pxToRem(15)};
  appearance: none;
  background-color: ${COLORS.background1};
  color: ${COLORS.font1};
  border-color: ${COLORS.line1};

  &:placeholder {
    color: ${COLORS.font2};
  }

  &:focus {
    outline: none;
    border-color: ${COLORS.line2};
  }

  &:disabled {
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

export class TextInput extends PureComponent {
  static propTypes = {
    valid: PropTypes.bool,
    error: PropTypes.bool,
    tiny: PropTypes.bool,
    disabled: PropTypes.bool,
    name: PropTypes.text,
  }

  input = createRef()

  render() {
    const { valid, error, disabled, name, digits, tiny, ...others } = this.props

    return (
      <StyledInput
        ref={this.input.focus && this.input.blur}
        valid={valid}
        error={error}
        disabled={disabled}
        tiny={tiny}
        name={name}
        {...others}
      />
    )
  }
}
