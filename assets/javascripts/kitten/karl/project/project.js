import React from 'react'
import { StyleRoot } from 'radium'
import { ProjectHero } from 'kitten/karl/project/hero'
import { ProjectInformations } from 'kitten/karl/project/informations'
import { ProjectNavigation } from 'kitten/karl/project/navigation'
import { ProjectDescription } from 'kitten/karl/project/description'
import { ProjectRewards } from 'kitten/karl/project/rewards'
import { KarlFooterKisskiss } from 'kitten/karl/footer/footer-kisskiss'

export const KarlProject = props => (
  <StyleRoot>
    <ProjectHero {...props} />
    <ProjectInformations />
    <ProjectNavigation />

    {props.navigation === 'description' && <ProjectDescription />}

    {props.navigation === 'rewards' && <ProjectRewards />}

    <KarlFooterKisskiss />
  </StyleRoot>
)
