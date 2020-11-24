import React from 'react'
import { Marger } from '../../../layout/marger'
import { RadioButtonSet } from '../../../form/radio-button-set'

export const FieldRadioButtonSet = props => (
  <Marger top="1">
    <RadioButtonSet {...props} />
  </Marger>
)
