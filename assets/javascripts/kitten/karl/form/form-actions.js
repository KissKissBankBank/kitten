import React from 'react'
import { FormActions } from 'kitten/components/form/form-actions'
import { Button } from 'kitten/components/buttons/button'

export const KarlFormActions = props => {
  return (
    <FormActions {...props}>
      <a href="#" className="k-Button k-Button--hydrogen karl-FormActions__button">
        Button
      </a>

      <Button className="karl-FormActions__button" modifier="helium">
        Button
      </Button>

      <input className="k-Button k-Button--beryllium karl-FormActions__button"
             type="submit"
             value="Button" />
    </FormActions>
  )
}
