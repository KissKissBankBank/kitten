import React, { Fragment } from 'react'
import {
  KarlSideGridWithLeftAsideAndSmallSize,
  KarlSideGridWithRightAside,
} from '../../../assets/javascripts/kitten/karl/grid/side-grid'
import Example from '../../app/example'

export default () => {
  return (
    <Fragment>
      <div className="k-Grid">
        <Example title="Side grid with right aside">
          <KarlSideGridWithRightAside />
        </Example>
        <Example title="Side grid with left aside">
          <KarlSideGridWithLeftAsideAndSmallSize />
        </Example>
      </div>
    </Fragment>
  )
}
