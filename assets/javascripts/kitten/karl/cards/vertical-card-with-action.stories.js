import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, object } from '@storybook/addon-knobs/react'
import { VerticalCardWithAction } from '../../components/cards/vertical-card-with-action'
import { Grid, GridCol } from '../../components/grid/grid'
import { Marger } from '../../components/layout/marger'

storiesOf('Cards/VerticalCardWithAction', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo('common info')(() => (
      <Marger top="3" bottom="3">
        <Grid>
          <GridCol col="3">
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
          </GridCol>
        </Grid>
      </Marger>
    )),
  )
