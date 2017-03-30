import React from 'react'
import { RadioButton } from 'kitten/components/form/radio-button'

export const KarlRadioButtonError = () => (
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
  </div>
)

export const KarlRadioButtonContentError = () => (
  <div className="k-TextInputWithInfo">
    <RadioButton error
                 name="karlradiobuttoncontenterror"
                 text="Error">
       Quam multa enim, quae nostra causa numquam faceremus,
       facimus causa amicorum! precari ab indigno, supplicare, tum
       acerbius in aliquem invehi insectarique vehementius.
    </RadioButton>
  </div>
)
