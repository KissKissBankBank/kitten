import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, object } from '@storybook/addon-knobs/react'
import { StyleRoot } from 'radium'
import { VerticalCardWithAction } from 'kitten/components/cards/vertical-card-with-action'
import { Grid, GridCol } from 'kitten/components/grid/grid'

storiesOf('Cards/VerticalCardWithAction', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo('common info')(() => (
      <StyleRoot>
        <Grid>
          <GridCol>
            <VerticalCardWithAction
              imageProps={object('Src/Alt', {
                src: 'http://via.placeholder.com/500x500/caf4fe/caf4fe',
                alt: '',
              })}
              titleDescription={text(
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
              )}
              button={text('Lorem ipsum')}
              buttonModifier={text('helium')}
            />
          </GridCol>
        </Grid>
      </StyleRoot>
    )),
  )
