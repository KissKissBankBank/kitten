import React from 'react'
import { storiesOf } from '@storybook/react'
import { Overlay } from './index'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'
import { Button } from '../../buttons/button'

const TOGGLE_EVENT = 'event:toggle'
const CLOSE_EVENT = 'event:close'
const OPEN_EVENT = 'event:open'

const handleToggleClick = () => window.dispatchEvent(new Event(TOGGLE_EVENT))
const handleCloseClick = () => window.dispatchEvent(new Event(CLOSE_EVENT))
const handleOpenClick = () => window.dispatchEvent(new Event(OPEN_EVENT))

storiesOf('Modals/Overlay', module).add('default', () => (
  <Container>
    <Marger top="2">
      <Overlay
        toggleEvent={TOGGLE_EVENT}
        closeEvent={CLOSE_EVENT}
        openEvent={OPEN_EVENT}
        zIndex={-1}
      />
      <Button onClick={handleToggleClick}>Toggle Overlay</Button>
      <br />
      <Button onClick={handleCloseClick}>Close Overlay</Button>
      <br />
      <Button onClick={handleOpenClick}>Open Overlay</Button>
    </Marger>
  </Container>
))
