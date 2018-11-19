import React from 'react'
import { KarlCounterBlock } from 'kitten/karl/meters/karl-counter-block'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <Example title="Counter block">
        <KarlCounterBlock />
      </Example>
    </div>
  )
}
