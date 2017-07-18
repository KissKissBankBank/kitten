import React, { Component } from 'react'
import classNames from 'classnames'
import { TextInput } from 'kitten/components/form/text-input'

export class TextInputWithButton extends Component {
  render() {
    const {
      className,
      valid,
      error,
      tiny,
      value,
      ...textInputProps,
    } = this.props

    const textInputWithButtonClassName = classNames(
      'k-TextInputWithButton__button',
      {
        'is-valid': valid,
        'is-error': error,
      }
    )

    return (
      <div className="k-TextInputWithButton">
        <TextInput
          tiny={ tiny }
          valid={ valid }
          error={ error }
          className="k-TextInputWithButton__input"
          { ...textInputProps }
        />
        <input
          className={ textInputWithButtonClassName }
          type="button"
          value={ value }
        />
      </div>
    )
  }
}

TextInputWithButton.defaultProps = {
  tag: 'input',
  valid: false,
  error: false,
  value: 'Button',
  tiny: false,
}
