import React from 'react'
import { KarlStarButton } from 'kitten/karl/buttons/star-button'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <div className="k-Grid__col k-Grid__col--12">
        <Example title="Star button">
          <KarlStarButton />
        </Example>
      </div>
    </div>
  )
}
