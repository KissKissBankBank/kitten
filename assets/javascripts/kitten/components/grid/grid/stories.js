import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Grid, GridCol } from './index'
import { Container } from '../../../components/grid/container'

storiesOf('Grid/Grid', module).add(
  'default',
  withInfo('common info')(() => (
    <Container>
      <Grid colNumber={10}>
        <GridCol col={4} offset={3} col-s={5} offset-s={0} col-l={2}>
          <div style={{ background: '#fae9d8' }}>{'🚗 '.repeat(5)}</div>
        </GridCol>
        <GridCol col-s={3} offset-s={2} col-l={6} offset-l={1}>
          <div style={{ background: '#fae9d8' }}>{'🚗 '.repeat(8)}</div>
        </GridCol>
      </Grid>
    </Container>
  )),
)
