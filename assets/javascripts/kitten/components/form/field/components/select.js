import React, { Component } from 'react'
import { Marger } from '../../../layout/marger'
import { SelectWithState } from '../../../form/select-with-state'

export class FieldSelect extends Component {
  render() {
    return (
      <Marger top="1">
        <SelectWithState {...this.props} />
      </Marger>
    )
  }
}
