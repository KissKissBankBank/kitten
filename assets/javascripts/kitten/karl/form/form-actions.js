import React from 'react'
import { FormActions } from 'kitten/components/form/form-actions'
import { Button } from 'kitten/components/buttons/button'

export const KarlFormActions = props => {
  return (
    <FormActions { ...props }>
      <Button className="karl-FormActions__button k-FormActions__item"
              tag="a"
              href="#"
              modifier="hydrogen">
        Button
      </Button>

      <Button className="karl-FormActions__button k-FormActions__item"
              modifier="helium">
        Button
      </Button>
    </FormActions>
  )
}
