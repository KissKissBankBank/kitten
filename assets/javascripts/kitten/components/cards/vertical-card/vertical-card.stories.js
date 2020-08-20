import React from 'react'
import { text, object, select, boolean } from '@storybook/addon-knobs'
import { VerticalCard } from './index'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'
import { Grid, GridCol } from '../../grid/grid'

const textAlign = {
  Left: 'left',
  Center: 'center',
  Right: 'right',
}

export const Default = () => (
  <VerticalCard
    imageProps={object('Src/Alt', {
      src: 'https://via.placeholder.com/410x230/caf4fe/caf4fe',
      alt: 'Image alt',
    })}
    title={text('Title', 'Custom title')}
    description={text(
      'Description',
      'Lorem ipsum dolor sit amet, consectetur adipisicing ' +
        'elit, sed do eiusmod tempor incididunt ut labore et ' +
        'dolore magna aliqua. Ut enim ad minim veniam, quis ' +
        'nostrud exercitation ullamco laboris nisi ut aliquip.',
    )}
    textAlign={select('Text align', textAlign, 'center')}
    withTitleStroke={boolean('With title stroke', false)}
  />
)

Default.decorators = [
  Story => (
    <Marger top="3" bottom="3">
      <Container>
        <Grid>
          <GridCol col-l="4" col-s="6" col-xs="10" offset-xs="1" col-xxs="12">
            <Story />
          </GridCol>
        </Grid>
      </Container>
    </Marger>
  ),
]
