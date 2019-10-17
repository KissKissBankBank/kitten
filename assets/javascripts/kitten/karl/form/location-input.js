import React from 'react'
import { Label } from '../../components/form/label'
import { LocationInput } from '../../components/form/location-input'
import { Marger } from '../../components/layout/marger'

export const KarlLocationInput = () => {
  return (
    <Marger bottom="1">
      <Marger bottom="1">
        <Label size="micro">Localisation</Label>
      </Marger>
      <Marger top="1">
        <LocationInput />
      </Marger>
    </Marger>
  )
}
