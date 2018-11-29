import React from 'react'
import Component from '../../app/component'
import Section from '../../app/section'
import EmbeddedPlayer from './embedded-player'

export default () => {
  return (
    <Section title="Media" id="media">
      <Component
        title="Embedded Player"
        id="components/media/embedded-player"
        component={EmbeddedPlayer}
      />
    </Section>
  )
}
