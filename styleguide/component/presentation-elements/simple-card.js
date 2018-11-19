import React from 'react'
import { SimpleCard } from 'kitten/components/cards/simple-card'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <Example title="Simple card" className="k-Grid__col--3@m">
        <SimpleCard
          title="Title"
          subtitle="Subtitle"
          imageProps={{
            src: 'https://placehold.it/100x100/caf4fe/caf4fe',
          }}
        />
      </Example>
      <Example
        title="Simple card without horizontal stroke"
        className="k-Grid__col--3@m"
      >
        <SimpleCard
          title="Title"
          titleProps={{ className: 'k-u-align-center' }}
          imageProps={{
            src: 'https://placehold.it/100x100/caf4fe/caf4fe',
          }}
          horizontalStroke={false}
        />
      </Example>
      <Example title="Clickable simple card" className="k-Grid__col--3@m">
        <SimpleCard
          title="Title"
          paragraph="Excogitatum est super his, ut homines quidam ignoti,
            vilitate ipsa parum cavendi ad colligendos rumores per Antiochiae
            latera cuncta destinarentur"
          href="#"
          imageProps={{
            src: 'https://placehold.it/100x100/caf4fe/caf4fe',
          }}
        />
      </Example>
    </div>
  )
}
