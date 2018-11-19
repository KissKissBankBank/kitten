import React from 'react'
import { BackerCard } from 'kitten/components/cards/backer-card'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <Example title="Default" className="k-Grid__col--3@m">
        <BackerCard
          title="Backer name"
          subtitle="Subtitle"
          description="Description"
          imgProps={{ src: 'https://placehold.it/80x80/caf4fe/caf4fe' }}
        />
      </Example>
    </div>
  )
}
