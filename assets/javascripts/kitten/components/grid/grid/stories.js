import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Grid, GridCol } from './index'
import { Container } from '../../../components/grid/container'

storiesOf('Grid/Grid', module).add(
  'default',
  withInfo('common info')(() => (
    <Container>
      <Grid colAlign="right">
        <GridCol col="11" offset="1" col-s="4" offset-s="0" col-l="5">
          <div style={{ background: '#fae9d8' }}>{'🚗 '.repeat(5)}</div>
        </GridCol>
        <GridCol col-s="6" offset-s="1" col-l="5" offset-l="1">
          <div style={{ background: '#fae9d8' }}>{'🚗 '.repeat(8)}</div>
        </GridCol>
      </Grid>
    </Container>
  )),
)
