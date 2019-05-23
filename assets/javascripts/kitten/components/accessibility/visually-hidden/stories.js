import React from 'react'
import { storiesOf } from '@storybook/react'
import { VisuallyHidden } from './index'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'
import { Button } from '../../buttons/button/button'
import { BurgerIcon } from '../../icons/burger-icon'

const StoryContainer = ({ children }) => (
  <Container>
    <Marger top="5" bottom="5">
      {children}
    </Marger>
  </Container>
)

storiesOf('Accessibility/VisuallyHidden', module).add('VisuallyHidden', () => {
  return (
    <StoryContainer>
      <Button icon>
        <VisuallyHidden>Menu</VisuallyHidden>
        <BurgerIcon
          width={16}
          height={16}
          aria-hidden={true}
          focusable={false}
        />
      </Button>
    </StoryContainer>
  )
})
