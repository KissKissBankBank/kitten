// Select that uses https://github.com/JedWatson/react-select
// but handles the current value as a local state.

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
    return (
      <div className="k-Select">
        <Select { ...this.props }
                value={ this.state.value }
                onChange={ this.handleChange } />
      </div>
    )
  }
}

SelectWithState.defaultProps = {
  onChange: function() {},
}

export default SelectWithState
