import React from 'react'
import Component from '../../app/component'
import Section from '../../app/section'
import Loader from './loader'

export default () => {
  return (
    <Section title="Contextual elements" id="contextual-elements">
      <Component
        title="Loader"
        id="components/contextual-elements/loader"
        component={Loader}
      />
    </Section>
  )
}
