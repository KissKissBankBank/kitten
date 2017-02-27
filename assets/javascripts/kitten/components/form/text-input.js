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
      'k-TextInput__input',
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

    const renderGradient = () => {
      if(tag == 'textarea') {
        return (
          <div className='k-TextInput__gradient' />
        )
      }
    }

    return (
      <div className='k-TextInput'>
        <Tag className={ textInputClassNames } { ...others } />
        { renderGradient() }
      </div>
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
