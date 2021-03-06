import React from 'react'
import { text, boolean } from '@storybook/addon-knobs'
import { Container } from '../../grid/container'
import { Grid, GridCol } from '../../grid/grid'
import { TeamCard } from './index'
import { Marger } from '../../layout/marger'

export default {
  component: TeamCard,
  title: 'Cards/TeamCard',
  parameters: {
    component: TeamCard,
  },
}

export const Default = () => {
  const useLegacy = boolean('Use Legacy socialLink', false)

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
                links={
                  !useLegacy
                    ? [
                        {
                          name: 'linkedin',
                          href: text(
                            'Linkedin link',
                            'https://www.linkedin.com',
                          ),
                        },
                        {
                          name: 'twitter',
                          href: text('Twitter link', 'https://www.twitter.com'),
                        },
                      ]
                    : []
                }
                socialLink={
                  useLegacy ? 'https://www.linkedin.com/isLegacyLink' : null
                }
              />
            </TeamCard>
          </Marger>
        </GridCol>
      </Grid>
    </Container>
  )
}
