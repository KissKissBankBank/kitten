import React from 'react'
import { KarlGarbageButton } from 'kitten/karl/buttons/garbage-button'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <div className="k-Grid__col k-Grid__col--12">
        <Example title="Garbage button">
          <KarlGarbageButton />
        </Example>
      </div>
    </div>
  )
}
