import React from 'react'
import { FormRow } from 'kitten/components/form/form-row'

export const KarlFormRow = () => {
  return (
    <FormRow>
      <button className="k-FormRow__item k-TagButton" modifier="hydrogen">
        Tag
      </button>

      <button className="k-FormRow__item k-TagButton" modifier="hydrogen">
        Button
      </button>

      <button className="k-FormRow__item k-TagButton" modifier="hydrogen">
        Button
      </button>
    </FormRow>
  )
}
