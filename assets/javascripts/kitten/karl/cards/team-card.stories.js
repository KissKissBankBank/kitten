import React from 'react'
import Radium, { StyleRoot } from 'radium'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, object } from '@storybook/addon-knobs/react'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { TeamCard } from 'kitten/components/cards/team-card'
import { Marger } from 'kitten/components/layout/marger'

storiesOf('Cards/VerticalCard', module)
  .addDecorator(withKnobs)
  .add(
    withInfo('common info')(() => (
      <Marger top="3">
        <Grid>
          <GridCol col="3">
            <TeamCard
              firstName={text('First name', 'Lorem')}
              lastName={text('Last name', 'Ipsum')}
              jobTitle={text('Job title', 'Remote')}
            />
          </GridCol>
        </Grid>
      </Marger>
    )),
  )
