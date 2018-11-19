import React from 'react'
import { TextInputWithButton } from 'kitten/components/form/text-input-with-button'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <div className="k-Grid__col k-Grid__col--12 k-Grid__col--6@l">
        <div className="k-Grid">
          <Example title="Tiny" className="k-Grid__col--4@m k-Grid__col--12@l">
            <TextInputWithButton
              textInputProps={{
                tiny: true,
                placeholder: 'Lorem ipsum dolor sit amet ...',
              }}
            />
          </Example>
          <Example
            title="Normal"
            className="k-Grid__col--4@m k-Grid__col--12@l"
          >
            <TextInputWithButton
              textInputProps={{
                placeholder: 'Lorem ipsum dolor sit amet ...',
              }}
            />
          </Example>
        </div>
      </div>
      <div className="k-Grid__col k-Grid__col--12 k-Grid__col--6@l">
        <div className="k-Grid">
          <Example title="Valid" className="k-Grid__col--4@m k-Grid__col--12@l">
            <TextInputWithButton
              valid
              textInputProps={{
                placeholder: 'Lorem ipsum dolor sit amet ...',
              }}
            />
          </Example>
          <Example title="Error" className="k-Grid__col--4@m k-Grid__col--12@l">
            <TextInputWithButton
              error
              textInputProps={{
                placeholder: 'Lorem ipsum dolor sit amet ...',
              }}
            />
          </Example>
        </div>
      </div>
      <div className="k-Grid__col k-Grid__col--12 k-Grid__col--6@l">
        <div className="k-Grid">
          <Example
            title="Disabled"
            className="k-Grid__col--4@m k-Grid__col--12@l"
          >
            <TextInputWithButton
              disabled
              textInputProps={{
                placeholder: 'Lorem ipsum dolor sit amet ...',
              }}
            />
          </Example>
        </div>
      </div>
    </div>
  )
}
