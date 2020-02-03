import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import {
  withKnobs,
  text,
  boolean,
  object,
  select,
} from '@storybook/addon-knobs'
import { EngagementCard } from './index'
import { Grid, GridCol } from '../../grid/grid'

storiesOf('Cards/EngagementCard', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('default', () => {
    return (
      <Grid style={{ marginTop: '3em' }}>
        <GridCol offset="1" col="10">
          <EngagementCard />
        </GridCol>
      </Grid>
    )
  })
