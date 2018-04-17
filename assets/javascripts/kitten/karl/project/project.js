import React from 'react'
import { StyleRoot } from 'radium'
import { ProjectHeader } from 'kitten/karl/project/header'
import { ProjectInformations } from 'kitten/karl/project/informations'
import { ProjectNavigation } from 'kitten/karl/project/navigation'
import { ProjectDescription } from 'kitten/karl/project/description'
import { KarlFooterKisskiss } from 'kitten/karl/footer/footer-kisskiss'

export const KarlProject = props => (
  <StyleRoot>
    <ProjectHeader {...props} />
    <ProjectInformations />
    <ProjectNavigation />
    <ProjectDescription />
    <KarlFooterKisskiss />
  </StyleRoot>
)
