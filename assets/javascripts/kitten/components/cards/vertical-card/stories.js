import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import {
  withKnobs,
  text,
  object,
  select,
  boolean,
} from '@storybook/addon-knobs'
import { VerticalCard } from './index'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'
import { Grid, GridCol } from '../../grid/grid'

const textAlign = {
  Left: 'left',
  Center: 'center',
  Right: 'right',
}

const info = {
  text: `
    # VerticalCard
    &nbsp;

    ## Import
    ~~~js
    import { VerticalCard } from '@kisskissbankbank/kitten/src/components/cards/vertical-card'
    ~~~

    ## Usage
    &nbsp;

    #### Default
    ~~~js
    <VerticalCard>MyVerticalCard</VerticalCard>
    ~~~
  `,
  header: false,
  propTablesExclude: [Container, Grid, GridCol, Marger],
}

storiesOf('Cards/VerticalCard', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add(
    'default',
    () => {
      return (
        <Marger top="3" bottom="3">
          <Container>
            <Grid>
              <GridCol
                col-l="4"
                col-s="6"
                col-xs="10"
                offset-xs="1"
                col-xxs="12"
              >
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
              </GridCol>
            </Grid>
          </Container>
        </Marger>
      )
    },
    { info },
  )
