import React from 'react'
import { DevGrid } from '../../assets/javascripts/kitten/components/dev/dev-grid'

const GridDecorator = storyFn => (
  <>
    {storyFn()}
    <DevGrid />
  </>
)

export default GridDecorator
