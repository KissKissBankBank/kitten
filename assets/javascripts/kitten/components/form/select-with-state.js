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
    const { _value, _onChange, className, ...other } = this.props

    return (
      <div className={ classNames("k-Select", className) }>
        <Select clearable={ false }
                searchable={ false }
                multi={ false }
                value={ this.state.value }
                onChange={ this.handleChange }
                { ...other } />
      </div>
    )
  }
}

SelectWithState.defaultProps = {
  onChange: function() {},
}

export default SelectWithState
