import React from 'react'
import { Marger } from '../../../layout/marger'
import { Autocomplete } from '../../../form/autocomplete'

export const FieldAutocomplete = props => (
  <Marger top="1.5">
    <Autocomplete {...props} />
  </Marger>
)
