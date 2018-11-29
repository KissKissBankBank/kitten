import React from 'react'
import { KarlCard } from '../../../assets/javascripts/kitten/karl/cards/card'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <div className="k-Grid__col k-Grid__col--12 k-Grid__col--3@l">
        <div className="k-Grid">
          <Example
            title="With micro radius"
            className="k-Grid__col--4@s k-Grid__col--12@l"
          >
            <KarlCard rounded="micro" />
          </Example>
          <Example
            title="With tiny radius"
            className="k-Grid__col--4@s k-Grid__col--12@l"
          >
            <KarlCard rounded="tiny" />
          </Example>
          <Example
            title="With normal radius"
            className="k-Grid__col--4@s k-Grid__col--12@l"
          >
            <KarlCard rounded />
          </Example>
        </div>
      </div>
      <div className="k-Grid__col k-Grid__col--12 k-Grid__col--3@l">
        <div className="k-Grid">
          <Example
            title="With micro radius and border"
            className="k-Grid__col--4@s k-Grid__col--12@l"
          >
            <KarlCard rounded="micro" withBorder />
          </Example>
          <Example
            title="With tiny radius and border"
            className="k-Grid__col--4@s k-Grid__col--12@l"
          >
            <KarlCard rounded="tiny" withBorder />
          </Example>
          <Example
            title="With normal radius and border"
            className="k-Grid__col--4@s k-Grid__col--12@l"
          >
            <KarlCard rounded withBorder />
          </Example>
        </div>
      </div>
    </div>
  )
}
