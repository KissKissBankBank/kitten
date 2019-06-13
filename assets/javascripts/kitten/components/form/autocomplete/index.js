import React, { Component } from 'react'
import { LocationIcon } from '../../../components/icons/location-icon'
import Autocomplete from 'react-autocomplete'

export class ReactAutocomplete extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: '',
    }
  }

  render() {
    return (
      <Autocomplete
        getItemValue={item => item.label}
        items={[{ label: 'apple' }, { label: 'banana' }, { label: 'pear' }]}
        renderItem={item => <div>{item.label}</div>}
        value={this.state.value}
        onChange={e => (value = e.target.value)}
        onSelect={val => (value = val)}
      />
    )
  }
}
