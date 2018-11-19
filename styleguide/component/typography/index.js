import React from 'react'
import Component from '../../app/component'
import Section from '../../app/section'
import Title from './title'
import Paragraph from './paragraph'
import Text from './text'

export default () => {
  return (
    <Section title="Typography" id="typography">
      <Component
        title="Title"
        id="components/typography/title"
        component={Title}
      />
      <Component
        title="Paragraph"
        id="components/typography/paragraph"
        component={Paragraph}
      />
      <Component
        title="Text"
        id="components/typography/text"
        component={Text}
      />
    </Section>
  )
}
