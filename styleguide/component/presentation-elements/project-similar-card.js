import React from 'react'
import { KarlProjectSimilarLoader } from '../../../assets/javascripts/kitten/karl/cards/project-similar-card'
import {
  KarlSimilarProjectsCard,
  KarlSimilarProjectsWithInfosCard,
} from '../../../assets/javascripts/kitten/karl/cards/similar-projects-card'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <Example
        title="Project similar card with image"
        className="k-Grid__col--4@m k-Grid__col--4@"
      >
        <KarlSimilarProjectsCard />
      </Example>
      <Example
        title="Project similar card with tags and infos"
        className="k-Grid__col--4@m k-Grid__col--4@"
      >
        <KarlSimilarProjectsWithInfosCard />
      </Example>
      <Example
        title="Project similar card with loader"
        className="k-Grid__col--4@m k-Grid__col--4@"
      >
        <KarlProjectSimilarLoader />
      </Example>
    </div>
  )
}
