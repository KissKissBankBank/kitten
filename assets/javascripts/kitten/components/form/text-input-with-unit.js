import React from 'react'
import classNames from 'classnames'
import { TextInput } from 'kitten/components/form/text-input'

export class TextInputWithUnit extends React.Component {
  render() {
    const { className,
            placeholder
            tag,
            type,
            unit,
            ...others } = this.props

    let textInputClassNames = classNames(
      'k-TextInput k-TextInputWithUnit__input',
      className,
    )

    return (
      <div className="k-TextInputWithUnit">
        <TextInput tag="input"
                   type="text"
                   className={ textInputClassNames }
                   placeholder={ placeholder }
                   { ...others }/>
        <span class="k-TextInputWithUnit__unit">
          { unit }
        </span>
      </div>
    )
  }
}

TextInputWithUnit.defaultProps = {
  unit: 'λ',
  placeholder: null,
  valid: false,
  error: false,
  tiny: false,
}
