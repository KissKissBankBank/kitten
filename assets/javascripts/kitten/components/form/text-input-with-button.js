import React, { Component } from 'react'
import classNames from 'classnames'
import { TextInput } from 'kitten/components/form/text-input'

export class TextInputWithButton extends Component {
  render() {
    const {
      valid,
      error,
      value,
      className,
      textInputProps,
      buttonProps,
      ...others,
    } = this.props

    const TextInputWithButtonClassName = classNames(
      'k-TextInputWithButton',
      className,
    )

    const textInputWithButtonInputClassName = classNames(
      'k-TextInputWithButton__input',
      textInputProps.className,
    )

    const textInputWithButtonButtonClassName = classNames(
      'k-TextInputWithButton__button',
      buttonProps.className,
      {
        'is-valid': valid,
        'is-error': error,
      }
    )

    return (
      <div className={ TextInputWithButtonClassName } { ...others }>
        <TextInput
          { ...textInputProps }
          valid={ valid }
          error={ error }
          className={ textInputWithButtonInputClassName }
        />
        <button
          { ...buttonProps }
          className={ textInputWithButtonButtonClassName }
          type="button">
          { value }
        </button>
      </div>
    )
  }
}

TextInputWithButton.defaultProps = {
  valid: false,
  error: false,
  value: 'Button',
  textInputProps: {
    tag: 'input',
  },
  buttonProps: {},
}
