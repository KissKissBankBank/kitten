import React from 'react'
import { withKnobs, select } from '@storybook/addon-knobs'
import { Container } from '../../../components/grid/container'
import { Timeline } from './index'
import { Grid, GridCol } from '../../../components/grid/grid'

export default {
  component: Timeline,
  title: 'List/Timeline',
  decorators: [withKnobs],
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
