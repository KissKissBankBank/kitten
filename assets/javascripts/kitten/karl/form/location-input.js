import React from 'react'
import { Label } from 'kitten/components/form/label'
import { LocationInput } from 'kitten/components/form/location-input'

export const KarlLocationInput = () => {
  return (
    <div>
      <Label className="k-u-margin-bottom-single">
        Localisation
      </Label>
      <LocationInput />
    </div>
  )
}
