import React from 'react'
import classNames from 'classnames'

export class TextInput extends React.Component {

  blur() {
    this.input.blur()
  }

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

    if (tag == 'textarea') {
      return (
        <div className="k-TextAreaWrapper">
          <textarea className={ textInputClassNames }
                    ref={ input => this.input = input }
                    { ...others } />
          <div className="k-TextAreaWrapper__gradient" />
        </div>
      )
    } else {
      return <input className={ textInputClassNames }
                    ref={ input => this.input = input }
                    type="text"
                    { ...others } />
    }
  }
}

TextInput.defaultProps = {
  tag: 'input', // or 'textarea'
  valid: false,
  error: false,
  tiny: false,
  digits: null,
}
