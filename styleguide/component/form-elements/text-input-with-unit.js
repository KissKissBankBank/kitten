import React from 'react'
import { TextInputWithUnit } from 'kitten/components/form/text-input-with-unit'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <div className="k-Grid__col k-Grid__col--12 k-Grid__col--4@l">
        <div className="k-Grid">
          <Example title="Tiny" className="k-Grid__col--4@m k-Grid__col--12@l">
            <TextInputWithUnit
              tiny
              placeholder="Lorem ipsum dolor sit amet"
              unit="€"
            />
          </Example>
          <Example
            title="Normal"
            className="k-Grid__col--4@m k-Grid__col--12@l"
          >
            <TextInputWithUnit
              placeholder="Lorem ipsum dolor sit amet"
              unit="€"
            />
          </Example>
        </div>
      </div>
      <div className="k-Grid__col k-Grid__col--12 k-Grid__col--4@l">
        <div className="k-Grid">
          <Example title="Valid" className="k-Grid__col--4@m k-Grid__col--12@l">
            <TextInputWithUnit
              valid
              placeholder="Lorem ipsum dolor sit amet"
              unit="€"
            />
          </Example>
          <Example title="Error" className="k-Grid__col--4@m k-Grid__col--12@l">
            <TextInputWithUnit
              error
              placeholder="Lorem ipsum dolor sit amet"
              unit="£"
            />
          </Example>
        </div>
      </div>
      <div className="k-Grid__col k-Grid__col--12 k-Grid__col--4@l">
        <div className="k-Grid">
          <Example
            title="Disabled"
            className="k-Grid__col--4@m k-Grid__col--12@l"
          >
            <TextInputWithUnit
              disabled
              placeholder="30"
              max={60}
              min={1}
              type="number"
              unit="days"
              unitWord
              tiny
              digits={2}
              unit="€"
            />
          </Example>
        </div>
      </div>
      <div className="k-Grid__col k-Grid__col--12 k-Grid__col--4@l">
        <div className="k-Grid">
          <Example
            title="Tiny with small input"
            className="k-Grid__col--4@m k-Grid__col--12@l"
          >
            <TextInputWithUnit
              placeholder="30"
              max={60}
              min={1}
              type="number"
              unit="days"
              unitWord
              tiny
              digits={2}
              unit="€"
            />
          </Example>
          <Example
            title="With small input"
            className="k-Grid__col--4@m k-Grid__col--12@l"
          >
            <TextInputWithUnit
              placeholder="30"
              max={60}
              min={1}
              type="number"
              unit="days"
              unitWord
              digits={2}
              unit="€"
            />
          </Example>
        </div>
      </div>
    </div>
  )
}
