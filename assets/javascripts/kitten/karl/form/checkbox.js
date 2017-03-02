import React from 'react'
import { Checkbox } from 'kitten/components/form/checkbox'

export const KarlCheckboxError = () => {
  return (
    <div className="k-TextInputWithInfo">
      <Checkbox error
                id="input-error"
                children="Error default">
      </Checkbox>
      <Checkbox error
                id="input-error-checked"
                children="Error default checked"
                defaultChecked>
      </Checkbox>
      <p className="k-TextInputWithInfo__error">
        Penatibus et magnis
      </p>
    </div>
  )
}
