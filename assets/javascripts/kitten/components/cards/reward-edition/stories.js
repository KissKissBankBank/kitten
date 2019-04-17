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
    <Marger top="5" bottom="5">
      {children}
    </Marger>
  </Container>
)

storiesOf('Cards/RewardEdition', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return (
      <StoryContainer>
        <RewardEdition.Header>Header</RewardEdition.Header>
        <RewardEdition.Content>Content</RewardEdition.Content>
        <RewardEdition.Footer>Footer</RewardEdition.Footer>
      </StoryContainer>
    )
  })
