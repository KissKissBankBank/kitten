import React, { Component } from 'react'
import { Marger } from 'kitten/components/layout/marger'
import { TextInput } from 'kitten/components/form/text-input'

export class FieldInput extends Component {
  render() {
    return (
      <Marger top="1.5">
        <TextInput {...this.props} />
      </Marger>
    )
  }
}
