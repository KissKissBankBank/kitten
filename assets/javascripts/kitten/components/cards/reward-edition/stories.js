import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, number } from '@storybook/addon-knobs'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'
import { Grid, GridCol } from '../../grid/grid'
import { RewardEdition } from './index'

const StoryContainer = ({ children }) => (
  <Container>
    <Grid>
      <GridCol col-m="8">
        <Marger top="5" bottom="5">
          {children}
        </Marger>
      </GridCol>
    </Grid>
  </Container>
)

storiesOf('Cards/RewardEdition', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return (
      <StoryContainer>
        <RewardEdition>
          <RewardEdition.Header />
          <RewardEdition.Content />
          <RewardEdition.Footer />
        </RewardEdition>
      </StoryContainer>
    )
  })
