import React, { Fragment } from 'react'
import { addDecorator } from '@storybook/react';
import { DevGrid } from 'kitten/components/dev/dev-grid'

const GridDecorator = (storyFn) => (
  <Fragment>
    { storyFn() }
    <DevGrid />
  </Fragment>
)

addDecorator(GridDecorator)
