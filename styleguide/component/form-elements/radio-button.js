import React from 'react'
import {
  KarlRadioButtonContentError,
  KarlRadioButtonError,
} from 'kitten/karl/form/radio-button'
import { RadioButton } from 'kitten/components/form/radio-button'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <Example title="With label" className="k-Grid__col--4@m k-Grid__col--4@l">
        <RadioButton
          id="karl-radio-button-1"
          name="karl-radio-button"
          text="Default"
        />
        <RadioButton
          id="karl-radio-button-2"
          name="karl-radio-button"
          defaultChecked
          text="Default checked"
        />
        <RadioButton
          id="karl-radio-button-4"
          name="karl-radio-button"
          disabled
          text="Default disabled"
        />
      </Example>
      <Example
        title="With big label"
        className="k-Grid__col--4@m k-Grid__col--4@l"
      >
        <RadioButton
          id="karl-radio-button-larg-1"
          name="karl-radio-button-large"
          large
          text="Large"
        />
        <RadioButton
          id="karl-radio-button-larg-2"
          name="karl-radio-button-large"
          large
          disabled
          defaultChecked
          text="Large disabled checked"
        />
      </Example>
      <Example title="Error" className="k-Grid__col--4@m k-Grid__col--4@l">
        <KarlRadioButtonError />
      </Example>
      <Example title="Containers">
        <RadioButton
          id="karl-radio-button-with-content"
          name="karl-radio-button-with-content"
          text="Default"
        >
          Harum trium sententiarum nulli prorsus assentior. Nec enim illa prima
          vera est, ut, quem ad modum in se quisque sit, sic in amicum sit
          animatus. Quam multa enim, quae nostra causa numquam faceremus,
          facimus causa.
        </RadioButton>
        <RadioButton
          id="karl-radio-button-with-content-large"
          name="karl-radio-button-with-content-large"
          large
          largeContent
          text="Default"
        >
          Quam multa enim, quae nostra causa numquam faceremus, facimus causa
          amicorum! precari ab indigno, supplicare, tum acerbius in aliquem
          invehi insectarique vehementius.
        </RadioButton>
        <KarlRadioButtonContentError />
      </Example>
    </div>
  )
}
