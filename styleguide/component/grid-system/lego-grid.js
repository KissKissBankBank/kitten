import React, { Fragment } from 'react'
import { KarlLegoGrid, KarlLegoGrid12Items } from '../../../assets/javascripts/kitten/karl/grid/lego-grid'
import Example from '../../app/example'

export default () => {
  return (
    <Fragment>
      <div className="k-Grid">
        <Example title="Lego grid">
          <KarlLegoGrid />
        </Example>
        <Example title="Lego grid with 12 items">
          <KarlLegoGrid12Items />
        </Example>
      </div>
    </Fragment>
  )
}
