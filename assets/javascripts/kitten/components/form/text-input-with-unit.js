import React from 'react'
import classNames from 'classnames'
import { TextInput } from 'kitten/components/form/text-input'

export class TextInputWithUnit extends React.Component {
  blur() {
    this.input.blur()
  }

  render() {
    const { className,
            valid,
            error,
            type,
            unit,
            tiny,
            disabled,
            digits,
            ...others } = this.props

    const textInputClassName = classNames(
      'k-TextInputWithUnit__input',
      className,
    )

    const unitClassName = classNames(
      'k-TextInputWithUnit__unit',
      {
        'k-TextInputWithUnit__unit--tiny': tiny,
        'is-valid': valid,
        'is-error': error,
        'is-inactive': disabled,
      },
    )

    const textInputWithUnitClassName = classNames(
      'k-TextInputWithUnit',
      {
        'k-TextInputWithUnit--fullWidth': !digits,
      },
    )

    return (
      <div className={ textInputWithUnitClassName }>
        <TextInput type={ type }
                   className={ textInputClassName }
                   valid={ valid }
                   error={ error }
                   tiny={ tiny }
                   disabled={ disabled }
                   digits={ digits }
                   ref={ input => this.input = input }
                   { ...others }
                   tag="input" />
        <span className={ unitClassName }>{ unit }</span>
      </div>
    )
  }
}

TextInputWithUnit.defaultProps = {
  unit: 'λ',
  type: 'number',
  placeholder: null,
  valid: false,
  error: false,
  tiny: false,
  disabled: false,
  digits: null,
}
