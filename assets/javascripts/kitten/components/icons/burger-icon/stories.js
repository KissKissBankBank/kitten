import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, select } from '@storybook/addon-knobs'
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
          isActive={boolean('isActive ?', false)}
          mainColor={select(
            'mainColor',
            { default: null, red: '#FF0000' },
            null,
          )}
          hoverColor={select(
            'hoverColor',
            { default: null, red: '#FF0000' },
            null,
          )}
        />
      </StoryGrid>
    )
  })
