import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
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

const info = {
  text: `
    # VisuallyHidden

    This component is used for Accessibility: it conveys content to screen readers but doesn’t display it on screen.
    &nbsp;

    ## Import
    ~~~js
    import { VisuallyHidden } from '@kisskissbankbank/kitten/src/components/accessibility/visually-hidden'
    ~~~

    ## Usage
    &nbsp;

    #### Default
    ~~~js
    <VisuallyHidden>Visually hidden text</VisuallyHidden>
    ~~~
  `,
  header: false,
  propTablesExclude: [StoryContainer, Container, Marger, BurgerIcon, Button],
}

storiesOf('Accessibility/VisuallyHidden', module)
  .addDecorator(withInfo)
  .add(
    'VisuallyHidden',
    () => {
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
    },
    { info },
  )
