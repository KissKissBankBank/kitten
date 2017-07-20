import React, { Component } from 'react'
import classNames from 'classnames'
import { TextInput } from 'kitten/components/form/text-input'

export class TextInputWithButton extends Component {
  render() {
    const {
      valid,
      error,
      value,
      textInputProps,
      buttonProps,
      ...others,
    } = this.props

    const textInputWithButtonClassName = classNames(
      'k-TextInputWithButton__button',
      {
        'is-valid': valid,
        'is-error': error,
      }
    )

    return (
      <div className="k-TextInputWithButton" { ...others }>
        <TextInput
          valid={ valid }
          error={ error }
          className="k-TextInputWithButton__input"
          { ...textInputProps }
        />
        <button
          className={ textInputWithButtonClassName }
          type="button"
          children={ value }
          { ...buttonProps }
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
  textInputProps: {},
  buttonProps: {},
}
