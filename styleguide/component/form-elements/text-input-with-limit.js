import React from 'react'
import { TextInputWithLimit } from 'kitten/components/form/text-input-with-limit'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <div className="k-Grid__col k-Grid__col--12 k-Grid__col--6@l">
        <div className="k-Grid">
          <Example title="Tiny" className="k-Grid__col--4@m k-Grid__col--12@l">
            <TextInputWithLimit tiny placeholder="Lorem ipsum dolor" />
          </Example>
          <Example title="Input" className="k-Grid__col--4@m k-Grid__col--12@l">
            <TextInputWithLimit placeholder="Lorem ipsum dolor" />
          </Example>
          <Example
            title="Disabled input"
            className="k-Grid__col--4@m k-Grid__col--12@l"
          >
            <TextInputWithLimit disabled placeholder="Lorem ipsum dolor" />
          </Example>
        </div>
      </div>
      <div className="k-Grid__col k-Grid__col--12 k-Grid__col--6@l">
        <div className="k-Grid">
          <Example
            title="Textarea"
            className="k-Grid__col--4@m k-Grid__col--12@l"
          >
            <TextInputWithLimit
              tag="textarea"
              rows="4"
              limit="128"
              placeholder="Lorem ipsum dolor"
            />
          </Example>
          <Example
            title="Disabled Textarea"
            className="k-Grid__col--4@m k-Grid__col--12@l"
          >
            <TextInputWithLimit
              tag="textarea"
              rows="4"
              limit="128"
              placeholder="Lorem ipsum dolor"
              disabled
            />
          </Example>
        </div>
      </div>
    </div>
  )
}
