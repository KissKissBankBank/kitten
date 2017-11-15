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
import React from 'react'
import classNames from 'classnames'
import Select from 'react-select'

export class SelectWithState extends React.Component {
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
    this.props.onInputChange(this.currentValue(val))
  }

  // TODO: deprecate the way to return an event
  // with the method onInputChange to standardise with react-select gem
  currentValue(val){
    if(this.props.eventReturnValueDeprecated) return {
      value: val,
      name: this.props.name
    }

    return val
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
        <SelectWithMultiLevel value={ this.state.value }
                              onChange={ this.handleChange }
                              disabled={ disabled }
                              { ...other } />
      </div>
    )
  }
}

class SelectWithMultiLevel extends React.Component {
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

    return <Select optionRenderer={ this.optionRenderer }
                   { ...this.props }
                   inputProps={ inputProps }
                   options={ this.flattenedOptions() } />
  }
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
  eventReturnValueDeprecated: true,
  inputProps: {},
}

// DEPRECATED: do not use default export.
export default SelectWithState
