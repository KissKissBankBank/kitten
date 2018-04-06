import React, { Component } from 'react'
import classNames from 'classnames'
import { TextInput } from 'kitten/components/form/text-input'

export class TextInputWithLimit extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: this.props.defaultValue,
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({ value: e.target.value })
    this.props.onChange(e)
  }

  render() {
    const { limit, defaultValue, onChange, disabled, ...others } = this.props

    const length = this.state.value ? this.state.value.length : 0

    const textInputLimitClassName = classNames('k-TextInputLimit', {
      'is-disabled': disabled,
    })

    const counterClassName = classNames('k-TextInputLimit__counter', {
      'is-error': length > limit,
    })

    return (
      <div className={textInputLimitClassName}>
        <TextInput
          className="k-TextInputLimit__input"
          value={this.state.value}
          onChange={this.handleChange}
          disabled={disabled}
          {...others}
        />
        <div className={counterClassName}>{limit - length}</div>
      </div>
    )
  }
}

TextInputWithLimit.defaultProps = {
  tag: 'input',
  limit: 80,
  defaultValue: '',
  disabled: false,
  onChange: function() {},
}
