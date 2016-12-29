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

class SelectWithState extends React.Component {
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
  }

  render() {
    const { value, onChange, className, ...other } = this.props

    return (
      <div className={ classNames('k-Select', className) }>
        <SelectWithMultiLevel value={ this.state.value }
                              onChange={ this.handleChange }
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
    if (!level)
      return label

    return (
      <span className={ 'k-Select__option--level' + level }>
        { label }
      </span>
    )
  }

  render() {
    return <Select optionRenderer={ this.optionRenderer }
                   { ...this.props }
                   options={ this.flattenedOptions() } />
  }
}

SelectWithState.defaultProps = {
  onChange: function() {},
  clearable: false,
  searchable: false,
  multi: false,
}

export default SelectWithState
