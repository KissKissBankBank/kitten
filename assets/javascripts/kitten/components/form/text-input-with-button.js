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
      <form role="button">
        <div className="k-TextInputWithButton">
          <TextInput
            className="k-TextInputWithButton__input"
            tiny={ tiny }
            { ...others }
          />
          <input
            className={ textInputWithButtonClassName }
            type="submit"
            value={ value }
            valid={ valid }
            error={ error }
          />
        </div>
      </form>
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
