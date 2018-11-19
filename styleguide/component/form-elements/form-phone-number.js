import React from 'react'
import { FormPhoneNumber } from 'kitten/components/form/form-phone-number'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <div className="k-Grid__col k-Grid__col--12 k-Grid__col--6@l">
        <div className="k-Grid">
          <Example title="Tiny" className="k-Grid__col--12@m k-Grid__col--12@l">
            <FormPhoneNumber
              areaOptions={[
                { value: '+33', label: '+33' },
                { value: '+44', label: '+44' },
                { value: '+34', label: '+34' },
                { value: '+39', label: '+39' },
              ]}
              areaName="area"
              areaValue="+44"
              placeholder="Lorem ipsum dolor sit amet"
              tiny
            />
          </Example>
          <Example
            title="Normal"
            className="k-Grid__col--12@m k-Grid__col--12@l"
          >
            <FormPhoneNumber
              areaOptions={[
                { value: '+33', label: '+33' },
                { value: '+44', label: '+44' },
                { value: '+34', label: '+34' },
                { value: '+39', label: '+39' },
              ]}
              areaName="area"
              areaValue="+33"
              placeholder="Lorem ipsum dolor sit amet"
            />
          </Example>
        </div>
      </div>
    </div>
  )
}
