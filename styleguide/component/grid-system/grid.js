import React, { Fragment } from 'react'
import {
  KarlGridInGrid,
  KarlGridSmall,
  KarlGridTwelveColumns,
  KarlGridWithOffset,
} from '../../../assets/javascripts/kitten/karl/grid/grid'
import Example from '../../app/example'

export default () => {
  return (
    <Fragment>
      <div className="k-Grid">
        <Example title="12 columns">
          <KarlGridTwelveColumns />
        </Example>
        <Example title="grid in grid">
          <KarlGridInGrid />
        </Example>
        <Example title="2, 4 and 6 columns starting from small">
          <KarlGridSmall />
        </Example>
        <Example title="6 and 4 columns with offset starting from large">
          <KarlGridWithOffset />
        </Example>
      </div>
    </Fragment>
  )
}
