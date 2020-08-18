import React, { Fragment } from 'react'
import { text } from '@storybook/addon-knobs'
import { BackerCard } from './backer-card'
import { Container } from '../../components/grid/container'
import { Grid, GridCol } from '../../components/grid/grid'
import { Marger } from '../../components/layout/marger'
import { Text } from '../../components/typography/text'

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
  title: 'Cards/BackerCard',
  component: BackerCard,
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
    imgProps={{ src: 'https://placeimg.com/80/80/any' }}
    description={<Description />}
  />
)
