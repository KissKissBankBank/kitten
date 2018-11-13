import React, { Component } from 'react'
import { Marger } from 'kitten/components/layout/marger'
import { SelectWithState } from 'kitten/components/form/select-with-state'

export class FieldSelect extends Component {
  render() {
    return (
      <Marger top="1.5">
        <SelectWithState {...this.props} />
      </Marger>
    )
  }
}
