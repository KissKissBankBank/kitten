import React, { Fragment } from 'react'
import { DevGrid } from 'kitten/components/dev/dev-grid'

const GridDecorator = (storyFn) => (
  <Fragment>
    { storyFn() }
    <DevGrid />
  </Fragment>
)

export default GridDecorator
