import React from 'react'
import { Label } from 'kitten/components/form/label'
import { LocationInput } from 'kitten/components/form/location-input'
import { Marger } from 'kitten/components/layout/marger'

export const KarlLocationInput = () => {
  return (
    <Marger bottom="1">
      <Label
        className="k-u-margin-bottom-single"
        size="tiny"
      >
        Localisation
      </Label>
      <LocationInput />
    </Marger>
  )
}
