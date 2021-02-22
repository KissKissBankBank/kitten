import React from 'react'
import { DevGrid } from '../../assets/javascripts/kitten/components/dev/dev-grid'

const DevGridDecorator = storyFn => (
  <>
    {storyFn()}
    <DevGrid />
  </>
)

export default DevGridDecorator
