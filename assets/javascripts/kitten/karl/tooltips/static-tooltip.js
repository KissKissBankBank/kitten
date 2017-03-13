import React from 'react'
import { StaticTooltip } from 'kitten/components/tooltips/static-tooltip'
import { Button } from 'kitten/components/buttons/button'

export const KarlStaticTooltip = props => {
  return (
    <div className="karl-StaticTooltip">
      <Button modifier="helium">
        Button
      </Button>
      <StaticTooltip { ...props } />
    </div>
  )
}
