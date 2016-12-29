// Select that uses https://github.com/JedWatson/react-select
// with default states and handles the current value as a local state.

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
        <SelectWithMultiLevel clearable={ false }
                              searchable={ false }
                              multi={ false }
                              value={ this.state.value }
                              onChange={ this.handleChange }
                              { ...other } />
      </div>
    )
  }
}

class SelectWithMultiLevel extends React.Component {
  optionRenderer({ level, label }) {
    if (!level)
      return label

    return (
      <span className={ 'k-Select__option--level' + level }>
        { label }
      </span>
    )
  }

  flattenedOptions() {
    const options = []
    this.props.options.map((option) => {
      if (option.children) {
        option.level = 1
        options.push(option)
        option.children.map((opt) => {
          opt.level = 2
          options.push(opt)
        })
      } else {
        options.push(option)
      }
    })
    return options
  }

  render() {
    return <Select optionRenderer={ this.optionRenderer }
                   { ...this.props }
                   options={ this.flattenedOptions() } />
  }
}

SelectWithState.defaultProps = {
  onChange: function() {},
}

export default SelectWithState
