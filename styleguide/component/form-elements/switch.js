import React from 'react'
import { Switch } from 'kitten/components/form/switch'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <div className="k-Grid__col k-Grid__col--12 k-Grid__col--4@l">
        <div className="k-Grid">
          <Example
            title="Normal"
            className="k-Grid__col--4@m k-Grid__col--12@l"
          >
            <Switch id="switch-input-1" label="label" />
            <Switch id="switch-input-2" label="label" isChecked />
          </Example>
          <Example
            title="Big Label"
            className="k-Grid__col--4@m k-Grid__col--12@l"
          >
            <Switch id="switch-input-3" label="label" big />
            <Switch id="switch-input-4" label="label" big isChecked />
          </Example>
        </div>
      </div>
      <div className="k-Grid__col k-Grid__col--12 k-Grid__col--4@l">
        <div className="k-Grid">
          <Example
            title="Disabled"
            className="k-Grid__col--4@m k-Grid__col--12@l"
          >
            <Switch id="switch-input-5" label="label" disabled />
            <Switch id="switch-input-6" label="label" disabled isChecked />
          </Example>
          <Example
            title="Disabled big label"
            className="k-Grid__col--4@m k-Grid__col--12@l"
          >
            <Switch id="switch-input-7" label="label" disabled big />
            <Switch id="switch-input-8" label="label" disabled big isChecked />
          </Example>
        </div>
      </div>
    </div>
  )
}
