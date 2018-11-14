import React from 'react'
import Radium, { StyleRoot } from 'radium'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, object } from '@storybook/addon-knobs/react'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { TeamCard } from 'kitten/components/cards/team-card'
import { Marger } from 'kitten/components/layout/marger'

storiesOf('Cards', module).add(
  'TeamCard',
  withInfo('common info')(() => (
    <Marger top="3">
      <Grid>
        <GridCol col="3">
          <TeamCard
            firstName={text('First name', 'Lorem')}
            lastName={text('Last name', 'Ipsum')}
            jobTitle={text('Job title', 'Remote')}
            mail={text('Mail', 'example@kisskissbankbank.com')}
            phoneNumber={text('Phone number', '00')}
            socialLink={text('Social link', ' ')}
            image={text(
              'Url image',
              'http://via.placeholder.com/500x500/caf4fe/caf4fe',
            )}
          />
        </GridCol>
      </Grid>
    </Marger>
  )),
)
