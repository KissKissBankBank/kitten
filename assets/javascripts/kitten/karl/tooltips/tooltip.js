import React from 'react'
import { Tooltip } from 'kitten/components/tooltips/tooltip'
import { Button } from 'kitten/components/buttons/button'

export const KarlStaticTooltip = props => {
  return (
    <Tooltip className="k-Button k-Button--lithium"
             element={ Button }
             elementChildren="Button"
             alwaysOpen={ true }
             { ...props } />
  )
}
