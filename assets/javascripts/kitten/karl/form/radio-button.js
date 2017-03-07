import React from 'react'
import { RadioButton } from 'kitten/components/form/radio-button'

export const KarlRadioButtonError = () => {
  return (
    <div className="k-TextInputWithInfo">
      <RadioButton error
                   name="karlradiobuttonerror"
                   text="Error default">
      </RadioButton>
      <RadioButton error
                   name="karlradiobuttonerror"
                   text="Error default checked"
                   defaultChecked>
      </RadioButton>
      <p className="k-TextInputWithInfo__error">
        Penatibus et magnis
      </p>
    </div>
  )
}

export const KarlRadioButtonContentError = () => {
  return (
    <div className="k-TextInputWithInfo">
      <RadioButton error
                   name="karlradiobuttoncontenterror"
                   text="Error">
         Quam multa enim, quae nostra causa numquam faceremus,
         facimus causa amicorum! precari ab indigno, supplicare, tum
         acerbius in aliquem invehi insectarique vehementius.
      </RadioButton>
      <p className="k-TextInputWithInfo__error">
        Penatibus et magnis
      </p>
    </div>
  )
}
