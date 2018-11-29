import React, { Component } from 'react'
import { Marger } from '../../../layout/marger'
import { RadioButtonSet } from '../../../form/radio-button-set'

export class FieldRadioButtonSet extends Component {
  render() {
    return (
      <Marger top="1.5">
        <RadioButtonSet style={{ lineHeight: '1.3rem' }} {...this.props} />
      </Marger>
    )
  }
}
