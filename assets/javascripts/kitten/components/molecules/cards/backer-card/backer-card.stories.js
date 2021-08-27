import React, { Fragment } from 'react'
import { text } from '@storybook/addon-knobs'
import { BackerCard } from './index'
import { Container, Grid, GridCol, Marger, Text } from '../../../..'
import { DocsPage } from 'storybook/docs-page'

const Description = () => (
  <Fragment>
    Lorem{' '}
    <Text color="primary1" weight="regular">
      ipsum
    </Text>{' '}
    dolor sit amet, <br />
    <Text weight="regular">consectetur adipiscing elit</Text>…
  </Fragment>
)

export default {
  title: 'Molecules/Cards/BackerCard',
  component: BackerCard,
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="BackerCard" />,
    },
  },
  decorators: [
    Story => (
      <Marger top="4">
        <Container>
          <Grid>
            <GridCol col="3">
              <Story />
            </GridCol>
          </Grid>
        </Container>
      </Marger>
    ),
  ],
}

export const Default = () => (
  <BackerCard
    title={text('Backer title', 'Backer name')}
    subtitle={text('Backer subtitle', 'Backer subtitle')}
    imgProps={{ src: `/kitten-${Math.floor(Math.random() * 10)}.jpg` }}
    description={<Description />}
  />
)
