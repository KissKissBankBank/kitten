import React from 'react'
import { boolean } from '@storybook/addon-knobs'
import { Separator } from './'
import { Marger } from '../../structure/marger'
import { Container } from '../../structure/container'
import { Grid, GridCol } from '../../structure/grid'

export default {
  title: 'Layout/Separator',
  component: Separator,
}

export const Default = () => {
  return (
    <Container>
      <Grid>
        <GridCol col="3">
          <Marger top="5" bottom="5">
            <Separator darker={boolean('Darker?', false)} />
          </Marger>
        </GridCol>
      </Grid>
    </Container>
  )
}
