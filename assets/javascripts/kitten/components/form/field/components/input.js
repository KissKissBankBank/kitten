import React, { Component } from 'react'
import { Marger } from '../../../layout/marger'
import { TextInput } from '../../../form/text-input'

export class FieldInput extends Component {
  render() {
    return (
      <Marger top="1.5">
        <TextInput {...this.props} />
      </Marger>
    )
  }
}
