import React from 'react';
import { TagButton } from 'kitten/components/buttons/tag-button';
import { FormRow } from 'kitten/components/form/form-row';

export const KarlFormRow = () => {
  return (
    <FormRow>
      <TagButton className="k-FormRow__item">Button</TagButton>

      <TagButton className="k-FormRow__item">Button</TagButton>

      <TagButton className="k-FormRow__item">Button</TagButton>
    </FormRow>
  );
};
