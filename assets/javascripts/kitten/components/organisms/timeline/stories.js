import React from 'react'
import { select } from '@storybook/addon-knobs'
import {} from '../../../components/structure/container'
import { Timeline } from './index'
import { Container, Grid, GridCol } from '../../..'

export default {
  component: Timeline,
  title: 'Organisms/Timeline',
  parameters: {
    component: Timeline,
  },
}

const itemHeightChoices = {
  Large: 'large',
  Thin: 'thin',
}

export const Default = () => (
  <Container>
    <Grid className="k-u-margin-top-quadruple k-u-margin-bottom-quadruple">
      <GridCol offset="1" col="6">
        <Timeline itemHeight={select('itemHeight', itemHeightChoices, 'large')}>
          <span>foo</span>
          <span>bar</span>
          <span>baz</span>
        </Timeline>
      </GridCol>
    </Grid>
  </Container>
)
