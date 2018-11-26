import React from 'react'
import { KarlCheckboxError } from '../../../assets/javascripts/kitten/karl/form/checkbox'
import { Checkbox } from '../../../assets/javascripts/kitten/components/form/checkbox'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <Example title="With label" className="k-Grid__col--4@m k-Grid__col--4@l">
        <Checkbox id="input-1">Item 1</Checkbox>
        <Checkbox id="input-2" defaultChecked>
          Item 2
        </Checkbox>
      </Example>
      <Example title="Error" className="k-Grid__col--4@m k-Grid__col--4@l">
        <KarlCheckboxError />
      </Example>
      <Example title="Disabled" className="k-Grid__col--4@m k-Grid__col--4@l">
        <Checkbox id="input-3" disabled>
          Item 1
        </Checkbox>
        <Checkbox id="input-4" defaultChecked disabled>
          Item 2
        </Checkbox>
      </Example>
      <Example
        title="With container"
        className="k-Grid__col--4@m k-Grid__col--4@l"
      >
        <Checkbox id="input-5">
          Concedere rectum rectum quidquid et simus accepimus quidem concedere
          sunt sunt.
        </Checkbox>
      </Example>
    </div>
  )
}
