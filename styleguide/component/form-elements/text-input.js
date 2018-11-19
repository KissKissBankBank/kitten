import React from 'react'
import { TextInput } from 'kitten/components/form/text-input'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <div className="k-Grid__col k-Grid__col--12 k-Grid__col--6@l">
        <div className="k-Grid">
          <Example title="Tiny" className="k-Grid__col--4@m k-Grid__col--12@l">
            <TextInput tiny placeholder="Lorem ipsum dolor sit amet ..." />
          </Example>
          <Example
            title="Normal"
            className="k-Grid__col--4@m k-Grid__col--12@l"
          >
            <TextInput placeholder="Lorem ipsum dolor sit amet ..." />
          </Example>
          <Example
            title="Text area"
            className="k-Grid__col--4@m k-Grid__col--12@l"
          >
            <TextInput
              tag="textarea"
              rows="7"
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
          </Example>
        </div>
      </div>
      <div className="k-Grid__col k-Grid__col--12 k-Grid__col--6@l">
        <div className="k-Grid">
          <Example title="Valid" className="k-Grid__col--4@m k-Grid__col--12@l">
            <TextInput valid placeholder="Lorem ipsum dolor sit amet ..." />
          </Example>
          <Example title="Error" className="k-Grid__col--4@m k-Grid__col--12@l">
            <TextInput error placeholder="Lorem ipsum dolor sit amet ..." />
          </Example>
          <Example
            title="Disabled"
            className="k-Grid__col--4@m k-Grid__col--12@l"
          >
            <TextInput disabled placeholder="Lorem ipsum dolor sit amet ..." />
          </Example>
        </div>
      </div>
    </div>
  )
}
