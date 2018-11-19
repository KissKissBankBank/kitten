import React, { Fragment } from 'react'
import { KarlRow } from 'kitten/karl/grid/row'
import Example from '../../app/example'

export default () => {
  return (
    <Fragment>
      <div className="k-Grid">
        <Example title="row">
          <KarlRow />
        </Example>
        <Example title="padded row">
          <KarlRow padded />
        </Example>
        <Example title="centered row">
          <KarlRow centered />
        </Example>
        <Example title="light row">
          <KarlRow light />
        </Example>
        <Example title="dark row">
          <KarlRow dark />
        </Example>
        <Example title="row with light bottom border">
          <KarlRow lightBottomBorder />
        </Example>
      </div>
    </Fragment>
  )
}
