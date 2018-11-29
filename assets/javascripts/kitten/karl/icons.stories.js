import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Grid, GridCol } from '../components/grid/grid'
import { ArrowIcon } from '../components/icons/arrow-icon'

storiesOf('Icons', module).add(
  'ArrowIcon',
  withInfo(
    'The ArrowIcon is an arrow that can be used in 4 differents directions.',
  )(() => {
    return (
      <div>
        <Grid>
          <GridCol offset="1" col="10">
            <div>
              <ArrowIcon version="solid" direction="top" />
            </div>
            <div>
              <ArrowIcon version="solid" direction="right" />
            </div>
            <div>
              <ArrowIcon version="solid" direction="bottom" />
            </div>
            <div>
              <ArrowIcon version="solid" direction="left" />
            </div>
            <div>
              <ArrowIcon version="solid" direction="top" disabled />
            </div>
          </GridCol>
        </Grid>
      </div>
    )
  }),
)
