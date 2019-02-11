import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Marger } from '../../../layout/marger'

export class FieldInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: props.defaultValue,
    }
  }

  handleChange = e => {
    const { onChange } = this.props
    this.setState({ value: e.target.value })
    onChange(e)
  }

  render() {
    const {
      className,
      valid,
      error,
      disabled,
      tiny,
      digits,
      name,
      limit,
      defaultValue,
      onChange,
      ...others
    } = this.props

    const textInputClassName = classNames('k-TextInput', className, {
      'k-TextInput--tiny': tiny,
      'k-TextInputLimit__input': !!limit,
      'is-valid': valid,
      'is-error': error,
      'is-disabled': disabled,
      'k-TextInput--twoDigits': digits === 2,
      'k-TextInput--sixDigits': digits === 6,
      'k-TextInput--twelveDigits': digits === 12,
    })

    const input = (
      <input
        type="text"
        onChange={this.handleChange}
        className={textInputClassName}
        disabled={disabled}
        name={name}
        value={this.state.value}
        {...others}
      />
    )

    return (
      <Marger top="1.5">
        {!limit ? (
          input
        ) : (
          <div
            className={classNames('k-TextInputLimit', {
              'is-disabled': disabled,
            })}
          >
            {input}
            <div
              className={classNames('k-TextInputLimit__counter', {
                'is-error': this.state.value.length > limit,
              })}
            >
              {limit - this.state.value.length}
            </div>
          </div>
        )}
      </Marger>
    )
  }
}

FieldInput.propTypes = {
  name: PropTypes.string,
  defaultValue: PropTypes.string,
  limit: PropTypes.number,
  digits: PropTypes.number,
  valid: PropTypes.bool,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  tiny: PropTypes.bool,
  onChange: PropTypes.func,
}

FieldInput.defaultProps = {
  defaultValue: '',
  valid: false,
  error: false,
  disabled: false,
  tiny: false,
  digits: undefined,
  limit: undefined,
  name: 'text',
  onChange: () => {},
}
