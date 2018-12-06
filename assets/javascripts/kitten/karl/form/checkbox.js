import React from 'react'
import { Checkbox } from '../../components/form/checkbox'

export const KarlCheckboxError = () => (
  <div className="k-TextInputWithInfo">
    <Checkbox error id="input-error">
      Error default
    </Checkbox>
    <Checkbox error id="input-error-checked" defaultChecked>
      Error default checked
    </Checkbox>
  </div>
)
