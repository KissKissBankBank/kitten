import React from 'react'
import { Progress } from 'kitten/components/meters/progress'
import { KarlRandomProgress } from 'kitten/karl/meters/random-progress'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <div className="k-Grid__col k-Grid__col--12 k-Grid__col--6@l">
        <div className="k-Grid">
          <Example title="Normal">
            <Progress value={60} />
          </Example>
          <Example title="With custom color">
            <Progress value={42} color="#68ffa0" />
          </Example>
          <Example title="With animation">
            <KarlRandomProgress />
          </Example>
        </div>
      </div>
    </div>
  )
}
