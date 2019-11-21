import React from 'react'
import { Marger } from '../../../layout/marger'
import { SelectWithState } from '../../../form/select-with-state'

export const FieldSelect = props => (
  <Marger top="1">
    <SelectWithState {...props} />
  </Marger>
)
