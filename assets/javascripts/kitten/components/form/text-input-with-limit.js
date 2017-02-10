import React from 'react'
import classNames from 'classnames'
import { TextInput } from 'kitten/components/form/text-input'

export class TextInputWithLimit extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: this.props.defaultValue
    }

    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(e) {
    this.setState({ value: e.target.value })
  }

  render() {
    const { limit,
            defaultValue,
            ...others } = this.props

    const length = this.state.value ? this.state.value.length : 0

    const counterClassNames = classNames(
      'k-TextInputLimit__counter',
      {
        'is-error': length > limit,
      }
    )

    return (
      <div className="k-TextInputLimit">
        <TextInput className="k-TextInputLimit__input"
                   value={ this.state.value }
                   onInput={ this.handleInput }
                   { ...others } />
        <div className={ counterClassNames }>
          { limit - length }
        </div>
      </div>
    )
  }
}

TextInputWithLimit.defaultProps = {
  limit: 80,
  defaultValue: "",
}
