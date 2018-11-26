import React from 'react'
import { StaticTooltip } from '../../components/tooltips/static-tooltip'
import { Button } from '../../components/buttons/button'
import { Grid, GridCol } from '../../components/grid/grid'

export const KarlStaticTooltip = props => {
  return (
    <Grid>
      <GridCol col-s="4">
        <div className="k-u-align-right">
          <Button modifier="helium">Button</Button>
          <StaticTooltip {...props} />
        </div>
      </GridCol>
    </Grid>
  )
}
