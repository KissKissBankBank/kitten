import React from 'react'
import classNames from 'classnames'

export class TextInput extends React.Component {
  render() {
    const { className,
            type,
            tag,
            valid,
            error,
            small,
            ...others } = this.props

    let textInputClassNames = classNames(
      'k-TextInput',
      className,
      {
        'k-TextInput--tiny': small,
        'is-valid': valid,
        'is-error': error,
      },
    )

    const Tag = tag

    return (
      <Tag className= { textInputClassNames } { ...others } />
    )
  }
}

TextInput.defaultProps = {
  tag: 'input',
  type: 'text',
  placeholder: "Lorem ipsum dolor sit amet",
  valid: false,
  error: false,
  small: false,
}
