import React from 'react'
import { select } from '@storybook/addon-knobs'
import { VerticalStroke } from './'
import { Marger } from '../../structure/marger'
import { Container } from '../../structure/container'
import { Grid, GridCol } from '../../structure/grid'

export default {
  title: 'Atoms/VerticalStroke',
  component: VerticalStroke,
}

export const Default = () => {
  return (
    <Container>
      <Grid>
        <GridCol col="3">
          <Marger top="5" bottom="5">
            <VerticalStroke
              size={select(
                'Size',
                { Tiny: 'tiny', Default: 'default', Big: 'big', Huge: 'huge' },
                'default',
              )}
            />
          </Marger>
        </GridCol>
      </Grid>
    </Container>
  )
}
