import React from 'react'
import { StaticTooltip } from 'kitten/components/tooltips/static-tooltip'
import { Button } from 'kitten/components/buttons/button'
import { Grid, GridCol } from 'kitten/components/grid/grid'

export const KarlStaticTooltip = props => {
  return (
    <GridCol col-s="4">
      <div className="karl-StaticTooltip">
        <Button modifier="helium">
          Button
        </Button>
        <StaticTooltip { ...props } />
      </div>
    </GridCol>
  )
}
