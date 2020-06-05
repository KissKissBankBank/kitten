import React from 'react'
import { card } from '../../hoc/card'

const KarlCardComponent = props => (
  <div style={{ height: '100px' }} {...props} />
)

export const KarlCard = card(KarlCardComponent, {
  light: true,
})
