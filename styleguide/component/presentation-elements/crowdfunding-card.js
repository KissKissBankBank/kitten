import React from 'react'
import { CrowdfundingCard } from 'kitten/components/cards/crowdfunding-card'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <Example title="Crowdfunding card" className="k-Grid__col--3@m">
        <CrowdfundingCard
          ownerTitle="Owner title"
          ownerDescription="Owner description"
          cardTitle="Lorem ipsum…"
          cardSubtitle="Sed ut perspiciatis unde omnis iste natus error Lorem
          ipsum dolor sit amet, consectetur adipisicing elit."
          info1="Lorem ipsum…"
          info2="Lorem ipsum…"
          info3="Lorem ipsum…"
          progress={42}
          state="Lorem ipsum…"
        />
      </Example>
      <Example title="Clickable article card" className="k-Grid__col--3@m">
        <CrowdfundingCard
          href="#"
          ownerTitle="Owner title"
          ownerDescription="Owner description"
          cardTitle="Lorem ipsum…"
          cardSubtitle="Sed ut perspiciatis unde omnis iste natus error Lorem
          ipsum dolor sit amet, consectetur adipisicing elit."
          info1="Lorem ipsum…"
          info2="Lorem ipsum…"
          info3="Lorem ipsum…"
          progress={0}
          state="Lorem ipsum…"
        />
      </Example>
      <Example title="Loading crowdfunding card" className="k-Grid__col--3@m">
        <CrowdfundingCard
          loading
          href="#"
          ownerTitle="Owner title"
          ownerDescription="Owner description"
          cardTitle="Lorem ipsum…"
          cardSubtitle="Sed ut perspiciatis unde omnis iste natus error Lorem
          ipsum dolor sit amet, consectetur adipisicing elit."
          info1="Lorem ipsum…"
          info2="Lorem ipsum…"
          info3="Lorem ipsum…"
          progress={42}
          state="Lorem ipsum…"
        />
      </Example>
    </div>
  )
}
