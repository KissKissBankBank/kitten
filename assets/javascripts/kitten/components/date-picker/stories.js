import React from 'react'
import { DatePicker } from './index'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { Container } from '../../components/grid/container'
import { Marger } from '../../components/layout/marger'

const StoryContainer = ({ children }) => (
  <Container>
    <Marger top="5" bottom="5">
      {children}
    </Marger>
  </Container>
)

storiesOf('Form/DatePicker', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return (
      <StoryContainer>
        <DatePicker />
      </StoryContainer>
    )
  })
