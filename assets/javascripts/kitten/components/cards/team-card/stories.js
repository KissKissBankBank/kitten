import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import { Container } from '../../grid/container'
import { Grid, GridCol } from '../../grid/grid'
import { TeamCard } from './index'
import { Marger } from '../../layout/marger'

storiesOf('Cards/TeamCard', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return (
      <Container>
        <Grid>
          <GridCol col="3">
            <Marger top="5" bottom="5">
              <TeamCard>
                <TeamCard.Image
                  src={text(
                    'Image url',
                    'http://via.placeholder.com/500x500/caf4fe/caf4fe',
                  )}
                  title={text('Image title', 'Title')}
                />
                <TeamCard.Title
                  children={text('children', 'Lorem Ipsum')}
                  subTitle={text('Subtitle', 'Consectetur')}
                />
                <TeamCard.Icons
                  email={text('Email', 'example@kisskissbankbank.com')}
                  phoneNumber={text('Phone number', '06 00 00 00 00')}
                  links={[
                    {
                      name: 'linkedin',
                      href: text('Linkedin link', 'https://www.linkedin.com'),
                    },
                    {
                      name: 'twitter',
                      href: text('Twitter link', 'https://www.twitter.com'),
                    },
                  ]}
                />
              </TeamCard>
            </Marger>
          </GridCol>
        </Grid>
      </Container>
    )
  })
