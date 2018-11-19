import React from 'react'
import Component from '../../app/component'
import Section from '../../app/section'
import Icons from './icons'

export default () => {
  return (
    <Section title="Icons" id="icons">
      <Component title="Icons" id="components/icons/icons" component={Icons} />
    </Section>
  )
}
