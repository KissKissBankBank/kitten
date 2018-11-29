import React from 'react'
import { KarlTimeline } from '../../../assets/javascripts/kitten/karl/lists/timeline'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <Example title="Timeline" col={5} className="k-Grid__col--offset-5">
        <KarlTimeline />
      </Example>
    </div>
  )
}
