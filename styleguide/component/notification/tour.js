import React from 'react'
import { KarlHeaderTour1, KarlHeaderTour2 } from 'kitten/karl/tours/tour'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <Example title="Header tour (1 on 2)">
        <KarlHeaderTour1 />
      </Example>
      <Example title="Header tour (2 on 2)">
        <KarlHeaderTour2 />
      </Example>
    </div>
  )
}
