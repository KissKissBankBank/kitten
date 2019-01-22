// Select that uses https://github.com/JedWatson/react-select
// with default states and handles the current value as a local state.
//
// Also handles multi-level options. You can give `children: []` to each option
// and fill it with options to represent a hierarchy.
//
// E.g:
//    <SelectWithState options={
//      { label: 'Cat',
//        children: [{ label: 'A' }, { label: 'B' }]
//      } />
//
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Select from 'react-select'

export class SelectWithState extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: props.value,
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.setState({ value: this.props.value })
    }
  }

  handleChange = val => {
    const value = val && val.value ? val : { value: null, label: null }

    this.setState({ value: value })
    this.props.onChange(value)
    this.props.onInputChange({ value: value, name: this.props.name })
  }

  onKeyDown = event => {
    const enterKeyCode = 13
    const spaceKeyCode = 32

    if (event.keyCode === enterKeyCode || event.keyCode === spaceKeyCode) {
      event.preventDefault()
      event.stopPropagation()
      this.onRemove(event)
    }
  }

  render() {
    const {
      value,
      onChange,
      className,
      tiny,
      error,
      valid,
      disabled,
      labelText,
      autoFill,
      ...other
    } = this.props

    const selectClassName = classNames('k-Select', className, {
      'k-Select--tiny': tiny,
      'is-error': error,
      'is-valid': valid,
      'is-disabled': disabled,
    })

    return (
      <div className={selectClassName}>
        {labelText && (
          <label className="k-Select__label" for={this.props.id}>
            {labelText}
          </label>
        )}
        {autoFill && (
          <input
            autocomplete={autoFill}
            x-autocompletetype={autoFill}
            xautocompletetype={autoFill}
            autocompletetype={autoFill}
            name={autoFill}
            style={{
              position: 'absolute',
              zIndex: '-1',
              opacity: '0',
            }}
            onChange={e => this.setState({ value: e.target.value })}
          />
        )}
        <SelectWithMultiLevel
          value={this.state.value}
          onKeyDown={this.onKeyDown}
          onChange={this.handleChange}
          disabled={disabled}
          {...other}
        />
      </div>
    )
  }
}

class SelectWithMultiLevel extends Component {
  // Turns a hierarchy of options with `children` into a flat array
  // of options with a `level` of 1, 2 or null.
  flattenedOptions() {
    const options = []

    this.props.options.map(option => {
      if (option.children) {
        option.level = 1
        options.push(option)
        option.children.map(opt => {
          opt.level = 2
          options.push(opt)
        })
      } else {
        options.push(option)
      }
    })

    return options
  }

  // React-Select allows changing the way options are rendered.
  optionRenderer({ level, label }) {
    if (!level) return label

    return <span className={'k-Select__option--level' + level}>{label}</span>
  }

  render() {
    let inputProps = this.props.inputProps

    if (this.props.labelText && !inputProps['aria-labelledby'])
      inputProps['aria-labelledby'] = this.props.id

    return (
      <Select
        optionRenderer={this.optionRenderer}
        {...this.props}
        inputProps={inputProps}
        options={this.flattenedOptions()}
      />
    )
  }
}

SelectWithState.propTypes = {
  autoFill: PropTypes.string,
}

SelectWithState.defaultProps = {
  onChange: function() {},
  onInputChange: function() {},
  clearable: false,
  searchable: false,
  deleteRemoves: false,
  multi: false,
  labelText: null,
  error: false,
  valid: false,
  disabled: false,
  tiny: false,
  name: null,
  inputProps: {},
  autoFill: undefined,
}

// DEPRECATED: do not use default export.
export default SelectWithState
