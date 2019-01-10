import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { BurgerIcon } from './index'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'

const StoryGrid = ({ children }) => (
  <Container>
    <Marger top="5" bottom="5">
      {children}
    </Marger>
  </Container>
)

storiesOf('Icons/BurgerIcon', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return (
      <StoryGrid>
        <BurgerIcon
          width="12"
          height="10"
          isActive={boolean('isActive ?', false)}
        />
      </StoryGrid>
    )
  })
