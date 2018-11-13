import React, { Component } from 'react'
import { Marger } from 'kitten/components/layout/marger'
import { RadioButtonSet } from 'kitten/components/form/radio-button-set'

export class FieldRadioButtonSet extends Component {
  render() {
    return (
      <Marger top="1.5">
        <RadioButtonSet style={{ lineHeight: '1.3rem' }} {...this.props} />
      </Marger>
    )
  }
}
