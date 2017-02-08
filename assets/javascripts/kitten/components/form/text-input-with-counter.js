import React from 'react'
import classNames from 'classnames'
import { TextInput } from 'kitten/components/form/text-input'

export class TextInputWithCounter extends React.Component {
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
    const { counter,
            ...others } = this.props

    const length = this.state.value ? this.state.value.length : 0

    const counterClassNames = classNames(
      'k-TextInputCounter__counter',
      {
        'is-error': length > this.props.counter,
      }
    )

    return (
      <div className="k-TextInputCounter">
        <TextInput className="k-TextInputCounter__input"
                   value={ this.state.value }
                   onInput={ this.handleInput }
                   { ...others } />
        <div className={ counterClassNames }>
          { this.props.counter - length }
        </div>
      </div>
    )
  }
}

TextInputWithCounter.defaultProps = {
  placeholder: "Lorem ipsum…",
  counter: 80,
}
