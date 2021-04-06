import React from 'react'
import { DevGrid } from '../../assets/javascripts/kitten/components/dev/dev-grid'

const GridDecorator = ({ children }) => (
  <>
    {children}
    <DevGrid />
  </>
)

export default DevGridDecorator
