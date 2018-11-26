import React from 'react'
import { Button } from '../../../assets/javascripts/kitten/components/buttons/button'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <div className="k-Grid__col k-Grid__col--12 k-Grid__col--3@l">
        <Example title="Tiny" className="k-Grid__col--4@s k-Grid__col--12@l">
          <Button size="tiny">Button</Button>
        </Example>
        <Example title="Normal" className="k-Grid__col--4@s k-Grid__col--12@l">
          <Button>Button</Button>
        </Example>
        <Example title="Big" className="k-Grid__col--4@s k-Grid__col--12@l">
          <Button size="big">Button</Button>
        </Example>
      </div>
      <div className="k-Grid__col k-Grid__col--12 k-Grid__col--3@l">
        <Example
          title="Hydrogen"
          className="k-Grid__col--4@s k-Grid__col--12@l"
        >
          <Button>Button</Button>
        </Example>
        <Example title="Helium" className="k-Grid__col--4@s k-Grid__col--12@l">
          <Button modifier="helium">Button</Button>
        </Example>
        <Example title="Lithium" className="k-Grid__col--4@s k-Grid__col--12@l">
          <Button modifier="lithium">Button</Button>
        </Example>
      </div>
      <div className="k-Grid__col k-Grid__col--12 k-Grid__col--3@l">
        <Example
          title="Beryllium"
          className="k-Grid__col--4@s k-Grid__col--12@l"
        >
          <Button modifier="beryllium">Button</Button>
        </Example>
        <Example title="Carbon" className="k-Grid__col--4@s k-Grid__col--12@l">
          <Button modifier="carbon">Button</Button>
        </Example>
        <Example title="Azote" className="k-Grid__col--4@s k-Grid__col--12@l">
          <Button modifier="azote">Button</Button>
        </Example>
      </div>
      <div className="k-Grid__col k-Grid__col--12 k-Grid__col--3@l">
        <Example title="Oxygen" className="k-Grid__col--4@s k-Grid__col--12@l">
          <Button modifier="oxygen">Button</Button>
        </Example>
        <Example
          title="Disabled"
          className="k-Grid__col--4@s k-Grid__col--12@l"
        >
          <Button disabled>Button</Button>
        </Example>
      </div>
    </div>
  )
}
