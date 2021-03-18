import React from 'react'
import { text, select } from '@storybook/addon-knobs'
import { StatusWithBullet } from './index'
import { Grid, GridCol } from '../../../components/grid/grid'

export const Default = () => (
  <StatusWithBullet
    statusMessage={text('Status message', 'Message')}
    statusType={select(
      'Status type',
      ['danger', 'success', 'warning', 'neutral', 'none'],
      'success',
    )}
    size={select('Size', ['normal', 'tiny', 'micro'], 'tiny')}
    weight={select('Weight', ['light', 'regular', 'bold'], 'regular')}
  />
)

Default.decorators = [
  Story => (
    <Grid style={{ marginTop: '5em' }}>
      <GridCol offset="1" col="8">
        <Story />
      </GridCol>
    </Grid>
  ),
]
