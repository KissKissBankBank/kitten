import React from 'react'
import classNames from 'classnames'

export class TextInput extends React.Component {
  render() {
    const { className,
            tag,
            valid,
            error,
            tiny,
            digits,
            ...others } = this.props

    const textInputClassNames = classNames(
      'k-TextInput',
      className,
      {
        'k-TextInput--tiny': tiny,
        'k-TextInput--area': tag == 'textarea',
        'is-valid': valid,
        'is-error': error,
        'k-TextInput--twoDigits': digits == 2,
        'k-TextInput--twelveDigits': digits == 12,
      },
    )

    const Tag = tag

    return (
      <Tag className={ textInputClassNames } { ...others } />
    )
  }
}

TextInput.defaultProps = {
  tag: 'input',
  type: 'text',
  placeholder: null,
  valid: false,
  error: false,
  tiny: false,
  digits: null,
}
