import React from 'react'
import { RadioButton } from 'kitten/components/form/radio-button'

export const KarlRadioButtonError = () => {
  return (
    <div className="k-TextInputWithInfo">
      <p>
        <RadioButton error
                     name="karlradiobuttonerror"
                     text="Error default checked"
                     defaultChecked>
        </RadioButton>
        <RadioButton error
                     name="karlradiobuttonerror"
                     text="Error default">
        </RadioButton>
      </p>
      <p className="k-TextInputWithInfo__error">
        Penatibus et magnis
      </p>
    </div>
  )
}
