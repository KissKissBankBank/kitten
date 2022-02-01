import React from 'react'
import { DevGrid } from '../../assets/javascripts/kitten/components/layout/dev-grid'

export const DevGridDecorator = ({ children }) => (
  <>
    {children}
    <DevGrid />
  </>
)
