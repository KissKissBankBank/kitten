import React from 'react'
import { PasswordInput } from '../../../assets/javascripts/kitten/components/form/password-input'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <div className="k-Grid__col k-Grid__col--12 k-Grid__col--6@l">
        <div className="k-Grid">
          <Example title="Tiny" className="k-Grid__col--8@s k-Grid__col--12@l">
            <PasswordInput
              iconLabel="Show password"
              hiddenIconLabel="Hide password"
              textInputProps={{
                tiny: true,
                placeholder: 'Enter your code',
              }}
            />
          </Example>
          <Example
            title="Normal"
            className="k-Grid__col--8@s k-Grid__col--12@l"
          >
            <PasswordInput
              iconLabel="Show password"
              hiddenIconLabel="Hide password"
              textInputProps={{
                placeholder: 'Enter your code',
              }}
            />
          </Example>
        </div>
      </div>
    </div>
  )
}
