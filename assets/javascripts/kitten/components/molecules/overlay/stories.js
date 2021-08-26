import React from 'react'
import { Overlay } from './index'
import { Marger } from '../../layout/marger'
import { Container } from '../../layout/container'
import { Button } from '../../molecules/buttons/button'
import { DocsPage } from 'storybook/docs-page'

const TOGGLE_EVENT = 'event:toggle'
const CLOSE_EVENT = 'event:close'
const OPEN_EVENT = 'event:open'

const handleToggleClick = () => window.dispatchEvent(new Event(TOGGLE_EVENT))
const handleCloseClick = () => window.dispatchEvent(new Event(CLOSE_EVENT))
const handleOpenClick = () => window.dispatchEvent(new Event(OPEN_EVENT))

export default {
  title: 'Molecules/Overlay',
  component: Overlay,
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="Overlay" />,
    },
  },
  decorators: [story => (
    <div className="story-Container">
      {story()}
    </div>
  )],
  args: {
    zIndex: -1,
    isActive: false,
    toggleEvent: TOGGLE_EVENT,
    closeEvent: CLOSE_EVENT,
    openEvent: OPEN_EVENT,
    position: 'absolute',
  }
}

export const Default = (args) => (
  <>
    <Overlay {...args} />
    <Button onClick={handleToggleClick}>Toggle Overlay</Button>
    <br />
    <Button onClick={handleCloseClick}>Close Overlay</Button>
    <br />
    <Button onClick={handleOpenClick}>Open Overlay</Button>
  </>
)
