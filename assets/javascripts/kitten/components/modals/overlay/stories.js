import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { Overlay } from './index'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'
import { Button } from '../../buttons/button'

const CLICK_EVENT = 'event:toggle'

const handleClick = () => window.dispatchEvent(new Event(CLICK_EVENT))

storiesOf('Modals/Overlay', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Container>
      <Marger top="2">
        <Overlay toggleEvent={CLICK_EVENT} zIndex={-1} />
        <Button onClick={handleClick}>Toggle Overlay</Button>
      </Marger>
    </Container>
  ))
