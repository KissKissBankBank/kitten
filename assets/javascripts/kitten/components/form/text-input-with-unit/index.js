import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { TextInput } from '../../../components/form/text-input'
import PropTypes from 'prop-types'
import TYPOGRAPHY from '../../../constants/typography-config'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import COLORS from '../../../constants/colors-config'
import classNames from 'classnames'

const StyledTextInputWithUnit = styled.div`
  display: flex;
  width: 1%;

  &:not(.k-Form-TextInputWithUnit--hasDigits) {
    width: 100%;
  }

  .k-Form-TextInputWithUnit__input {
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
    transition: all 0.2s;
    font-size: ${stepToRem(0)};
    ${TYPOGRAPHY.fontStyles.regular};

    &.k-Form-TextInputWithUnit__unit--valid {
      border-color: ${COLORS.tertiary2};
      color: ${COLORS.valid};
    }
    &.k-Form-TextInputWithUnit__unit--error {
      border-color: ${COLORS.error3};
      color: ${COLORS.error};
    }
    &.k-Form-TextInputWithUnit__unit--disabled {
      color: ${COLORS.font2};
      background-color: ${COLORS.line1};
    }
    &.k-Form-TextInputWithUnit__unit--tiny {
      padding: 0 ${pxToRem(10)};
    }
    &.k-Form-TextInputWithUnit__unit--big,
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
      border-color: ${COLORS.line2};
      color: ${COLORS.font1};
    }
  }

  &.k-Form-TextInputWithUnit--orion {
    .k-Form-TextInputWithUnit__input {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    .k-Form-TextInputWithUnit__unit {
      border-top-right-radius: ${pxToRem(4)};
      border-bottom-right-radius: ${pxToRem(4)};
    }
    .k-Form-TextInputWithUnit__unit--big {
      border-top-right-radius: ${pxToRem(8)};
      border-bottom-right-radius: ${pxToRem(8)};
    }
  }
`

export class TextInputWithUnit extends PureComponent {
  static propTypes = {
    type: PropTypes.string,
    valid: PropTypes.bool,
    error: PropTypes.bool,
    tiny: PropTypes.bool,
    big: PropTypes.bool,
    huge: PropTypes.bool,
    giant: PropTypes.bool,
    center: PropTypes.bool,
    disabled: PropTypes.bool,
    unit: PropTypes.string,
    unitWord: PropTypes.bool,
    digits: PropTypes.number,
    variant: PropTypes.oneOf(['andromeda', 'orion']),
  }

  static defaultProps = {
    unit: 'λ',
    unitWord: false,
    type: 'number',
    valid: false,
    error: false,
    tiny: false,
    big: false,
    huge: false,
    giant: false,
    center: false,
    disabled: false,
    digits: null,
    variant: 'andromeda',
  }

  constructor(props) {
    super(props)
  }

  render() {
    const { unit, unitWord, ...others } = this.props

    return (
      <StyledTextInputWithUnit
        className={classNames(
          'k-Form-TextInputWithUnit',
          `k-Form-TextInputWithUnit--${this.props.variant}`,
          {
            'k-Form-TextInputWithUnit--hasDigits': !!this.props.digits,
          },
        )}
      >
        <TextInput
          ref={input => {
            this.input = input
          }}
          {...others}
          className={classNames(
            'k-Form-TextInputWithUnit__input',
            this.props.className,
          )}
        />
        <span
          className={classNames('k-Form-TextInputWithUnit__unit', {
            'k-Form-TextInputWithUnit__unit--valid': this.props.valid,
            'k-Form-TextInputWithUnit__unit--error': this.props.error,
            'k-Form-TextInputWithUnit__unit--disabled': this.props.disabled,
            'k-Form-TextInputWithUnit__unit--tiny': this.props.tiny,
            'k-Form-TextInputWithUnit__unit--big': this.props.big,
            'k-Form-TextInputWithUnit__unit--huge': this.props.huge,
            'k-Form-TextInputWithUnit__unit--giant': this.props.giant,
            'k-Form-TextInputWithUnit__unit--hasUnitWord': !!unitWord,
          })}
        >
          {unit || unitWord}
        </span>
      </StyledTextInputWithUnit>
    )
  }
}
