import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text } from '@storybook/addon-knobs/react'
import { BackerCard } from './backer-card'
import { Container } from 'kitten/components/grid/container'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { Marger } from 'kitten/components/layout/marger'
import { Text } from 'kitten/components/typography/text'

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

storiesOf('Cards/BackerCard', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo('common info')(() => (
      <Marger top="4">
        <Container>
          <Grid>
            <GridCol col="3">
              <BackerCard
                title={text('Backer title', 'Backer name')}
                subtitle={text('Backer subtitle', 'Backer subtitle')}
                imgProps={{ src: 'https://placeimg.com/80/80/any' }}
                description={<Description />}
              />
            </GridCol>
          </Grid>
        </Container>
      </Marger>
    )),
  )
