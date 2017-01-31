import React from 'react'
import { FormRow } from 'kitten/components/form/form-row'

export const KarlFormRow = () => {
  return (
    <FormRow>
      <button className="k-FormRow__item k-TagButton k-TagButton--hydrogen">
        Tag
      </button>

      <button className="k-FormRow__item k-TagButton k-TagButton--hydrogen">
        Button
      </button>

      <button className="k-FormRow__item k-TagButton k-TagButton--hydrogen">
        Button
      </button>
    </FormRow>
  )
}
