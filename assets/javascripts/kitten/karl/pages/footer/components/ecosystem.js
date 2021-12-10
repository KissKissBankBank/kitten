import React from 'react'
import {
  Text,
  LendopolisLogo,
  GoodeedLogo,
  MicrodonLogo,
  MaisonDeCrowdfundingLogoOnDark,
  YouMatterLogo,
} from 'kitten'

export const Ecosystem = () => {
  return (
    <div>
      <Text
        tag="p"
        cssColor="var(--color-grey-000)"
        transform="uppercase"
        className="k-Footer__ecosystem--title"
      >
        Notre écosystème engagé
      </Text>

      <div className="k-Footer__ecosystem--logos">
        <LendopolisLogo
          primaryColor="var(--color-grey-000)"
          secondaryColor="var(--color-grey-000)"
          width="160"
        />
        <GoodeedLogo
          width= "127"
          color="var(--color-grey-000)" 
        />
        <MicrodonLogo
          color1="var(--color-grey-000)"
          color2="var(--color-grey-000)"
          width="144"
        />
        <YouMatterLogo
          color="var(--color-grey-000)"
          width="160"
        />
        <MaisonDeCrowdfundingLogoOnDark width="155" />
      </div>
    </div>
  )
}
