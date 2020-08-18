import React from 'react'
import { text, object } from '@storybook/addon-knobs'
import { VerticalCardWithAction } from '../../components/cards/vertical-card-with-action'
import { Grid, GridCol } from '../../components/grid/grid'
import { Marger } from '../../components/layout/marger'

export default {
  title: 'Cards/VerticalCardWithAction',
  component: VerticalCardWithAction,
  decorators: [
    Story => (
      <Marger top="3" bottom="3">
        <Grid>
          <GridCol col="3">
            <Story />
          </GridCol>
        </Grid>
      </Marger>
    ),
  ],
}

export const Default = () => (
  <VerticalCardWithAction
    imageProps={object('Src/Alt', {
      src: 'http://via.placeholder.com/500x500/caf4fe/caf4fe',
      alt: '',
    })}
    title={text('Title description', 'Lorem ipsum dolor sit amet')}
    description={text(
      'Text description',
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem',
    )}
    button={text('Button', 'Lorem ipsum')}
    buttonModifier={text('Button modifier', 'helium')}
  />
)
