import React from 'react'
import Radium, { StyleRoot } from 'radium'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs/react'
import { Container } from 'kitten/components/grid/container'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { TeamCard } from 'kitten/components/cards/team-card'
import { Marger } from 'kitten/components/layout/marger'

storiesOf('Cards/TeamCard', module)
  .addDecorator(withKnobs)
  .add('TeamCard', () => {
    return (
      <Container>
        <Grid>
          <GridCol col="3">
            <Marger top="5" bottom="5">
              <TeamCard>
                <TeamCard.Image
                  image={text(
                    'Url image',
                    'http://via.placeholder.com/500x500/caf4fe/caf4fe',
                  )}
                  imageTitle={text('Image title', 'Title')}
                />
                <TeamCard.Title
                  firstName={text('Firstname', 'Lorem')}
                  lastName={text('LastName', 'Ipsum')}
                  jobTitle={text('Job title', 'Consectetur')}
                />
                <TeamCard.Icons
                  mail={text('Mail', 'example@kisskissbankbank.com')}
                  phoneNumber={text('Phone number', '06 00 00 00 00')}
                  socialLink={text('Social link', 'https://www.linkedin.com')}
                />
              </TeamCard>
            </Marger>
          </GridCol>
        </Grid>
      </Container>
    )
  })
