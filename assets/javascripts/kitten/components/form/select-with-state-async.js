// Select that uses https://github.com/JedWatson/react-select
// with default states and handles the current value as a local state.
//
// Also handles multi-level options. You can give `children: []` to each option
// and fill it with options to represent a hierarchy.
//
// This version of the component uses asynchronous loading of options
// instead of a predefined list of values.
//
//
// E.g:
//
//    function getPostalCodes(input, callback) {
//      return [...];
//    }
//
//    <SelectWithStateAsync loadOptions={getPostalCodes} />
//
import React from 'react'
import classNames from 'classnames'
import Select from 'react-select'

class SelectWithStateAsync extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: props.value,
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(val) {
    this.setState({ value: val })
    this.props.onChange(val)
    this.props.onInputChange({ value: val, name: this.props.name })
  }

  renderLabel() {
    if (!this.props.labelText) return ''

    return (
      <label className="k-Select__label" id={ this.props.id }>
        { this.props.labelText }
      </label>
    )
  }

  render() {
    const { value, onChange, className, tiny, error, valid, disabled, ...other } = this.props
    const selectClassName = classNames(
      'k-Select',
      className,
      {
        'k-Select--tiny': tiny,
        'is-error': error,
        'is-valid': valid,
        'is-disabled': disabled,
      }
    )

    return (
      <div className={ selectClassName }>
        { this.renderLabel() }
        <SelectWithMultiLevelAsync value={ this.state.value }
                                   onChange={ this.handleChange }
                                   disabled={ disabled }
                                   { ...other } />
      </div>
    )
  }
}

class SelectWithMultiLevelAsync extends React.Component {
  constructor(props) {
    super(props)

    this.loadAndFlattenOptions = this.loadAndFlattenOptions.bind(this)
  }

  // Turns a hierarchy of options with `children` into a flat array
  // of options with a `level` of 1, 2 or null.
  flattenOptions(rawOptions) {
    const options = []

    rawOptions.map(option => {
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

  loadAndFlattenOptions(input, callback) {
    this.props.loadOptions(
      input,
      (error, options) => {
        if (!error) {
          callback(error, { options: this.flattenOptions(options) })
        } else {
          callback(error, { options })
        }
      }
    )
  }

  // React-Select allows changing the way options are rendered.
  optionRenderer({ level, label }) {
    if (!level) return label

    return (
      <span className={ 'k-Select__option--level' + level }>
        { label }
      </span>
    )
  }

  render() {
    let inputProps = this.props.inputProps

    if (this.props.labelText && !inputProps['aria-labelledby'])
      inputProps['aria-labelledby'] = this.props.id

    return <Select.Async optionRenderer={ this.optionRenderer }
                         { ...this.props }
                         inputProps={ inputProps }
                         options={ this.props.options }
                         loadOptions={ this.loadAndFlattenOptions } />
  }
}

SelectWithStateAsync.defaultProps = {
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
}

export default SelectWithStateAsync
