import React from 'react'
import { ProjectCreatorCard } from 'kitten/components/cards/project-creator-card'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <Example title="Project creator card" className="k-Grid__col--6@l">
        <ProjectCreatorCard
          date="17 August 2017"
          statusBackgroundColor="#f3fafd"
          statusBorderColor="#cbe8f9"
          statusText="New"
        >
          Post emensos insuperabilis expeditionis eventus.
        </ProjectCreatorCard>
      </Example>
      <Example
        title="Project creator card with link"
        className="k-Grid__col--6@l"
      >
        <ProjectCreatorCard
          date="17 August 2017"
          statusBackgroundColor="#f3fafd"
          linkText="Lorem Ipsum"
          statusText="Success"
          href="#"
        >
          Post emensos insuperabilis expeditionis eventus.
        </ProjectCreatorCard>
      </Example>
    </div>
  )
}
