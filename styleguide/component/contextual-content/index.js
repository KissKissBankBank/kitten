import React from 'react'
import Component from '../../app/component'
import Section from '../../app/section'
import InformationBox from './information-box'
import LinkBox from './link-box'
import LinkBoxWithIcon from './link-box-with-icon'
import StaticTooltip from './static-tooltip'
import Tooltip from './tooltip'
import ProjectCreatorCard from './project-creator-card'

export default () => {
  return (
    <Section title="Contextual content" id="contextual-content">
      <Component
        title="Information box"
        id="components/contextual-content/information-box"
        component={InformationBox}
      />
      <Component
        title="Link box"
        id="components/contextual-content/link-box"
        component={LinkBox}
      />
      <Component
        title="Link box with icon"
        id="components/contextual-content/link-box-with-icon"
        component={LinkBoxWithIcon}
      />
      <Component
        title="Static tooltip"
        id="components/contextual-content/static-tooltip"
        component={StaticTooltip}
      />
      <Component
        title="tooltip"
        id="components/contextual-content/tooltip"
        component={Tooltip}
      />
      <Component
        title="Project creator card"
        id="components/contextual-content/project-creator-card"
        component={ProjectCreatorCard}
      />
    </Section>
  )
}
