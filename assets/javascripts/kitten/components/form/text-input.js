import React from 'react'
import classNames from 'classnames'

export class TextInput extends React.Component {
  render() {
    const { className,
            tag,
            valid,
            error,
            tiny,
            ...others } = this.props

    const rows = (tag == 'textarea' ? this.props.rows : null)

    let textInputClassNames = classNames(
      'k-TextInput',
      className,
      {
        'k-TextInput--tiny': tiny,
        'k-TextInput--area': tag == 'textarea',
        'is-valid': valid,
        'is-error': error,
      },
    )

    const Tag = tag

    return (
      <Tag className={ textInputClassNames } { ...others } rows={ rows } />
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
}
