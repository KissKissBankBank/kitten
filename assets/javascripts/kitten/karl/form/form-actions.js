import React from 'react'
import { FormActions } from 'kitten/components/form/form-actions'

export const KarlFormActions = () => {
  return (
    <FormActions>
      <a href="#" className="k-Button k-Button--hydrogen">
        Button
      </a>

      <button className="k-Button k-Button--helium">
        Button
      </button>

      <input className="k-Button k-Button--beryllium"
             type="submit"
             value="Button" />
    </FormActions>
  )
}
