import React, { Fragment } from 'react'
import { ProjectHeader } from 'kitten/karl/project/header'
import { ProjectInformations } from 'kitten/karl/project/informations'
import { ProjectNavigation } from 'kitten/karl/project/navigation'
import { ProjectDescription } from 'kitten/karl/project/description'
import { KarlFooterKisskiss } from 'kitten/karl/footer/footer-kisskiss'

import { Marger } from 'kitten/components/layout/marger'

export const KarlProject = () => (
  <Fragment>
    <ProjectHeader />
    <ProjectInformations />
    <ProjectNavigation />
    <ProjectDescription />
    <KarlFooterKisskiss />
  </Fragment>
)
