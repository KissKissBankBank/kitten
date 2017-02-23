import React from 'react'
import { Checkbox } from 'kitten/components/form/checkbox'

export const KarlCheckboxError = () => {
  return (
    <div className="k-TextInputWithInfo">
      <p>
        <Checkbox error
                  id="input-error"
                  children="Error default">
        </Checkbox>
        <Checkbox error
                  id="input-error-checked"
                  children="Error default checked">
        </Checkbox>
      </p>
      <p className="k-TextInputWithInfo__error">
        Penatibus et magnis
      </p>
    </div>
  )
}
