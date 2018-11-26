import React from 'react'
import { TagButton } from '../../components/buttons/tag-button'
import { FormRow } from '../../components/form/form-row'

export const KarlFormRow = () => {
  return (
    <FormRow>
      <TagButton className="k-FormRow__item">Button</TagButton>

      <TagButton className="k-FormRow__item">Button</TagButton>

      <TagButton className="k-FormRow__item">Button</TagButton>
    </FormRow>
  )
}
