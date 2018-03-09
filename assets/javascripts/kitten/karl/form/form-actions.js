import React from 'react';
import { FormActions } from 'kitten/components/form/form-actions';
import { Button } from 'kitten/components/buttons/button';

export const KarlFormActions = props => {
  return (
    <FormActions {...props}>
      <FormActions.Item>
        <Button
          className="karl-FormActions__button"
          tag="a"
          href="#"
          modifier="hydrogen"
        >
          Button
        </Button>
      </FormActions.Item>
      <FormActions.Item>
        <Button className="karl-FormActions__button" modifier="helium">
          Button
        </Button>
      </FormActions.Item>
    </FormActions>
  );
};
