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
    <div className="k-Footer__ecosystem">
      <Text
        tag="p"
        cssColor="var(--color-grey-000)"
        transform="uppercase"
        className="k-Footer__ecosystem--title k-u-hidden@m-down"
      >
        Notre écosystème <br />engagé
      </Text>

      <Text
        tag="p"
        cssColor="var(--color-grey-000)"
        transform="uppercase"
        className="k-Footer__ecosystem--title k-u-hidden@l-up"
      >
        Notre écosystème engagé
      </Text>

      <div className="k-Footer__ecosystem--logos">
        <LendopolisLogo
          primaryColor="var(--color-grey-000)"
          secondaryColor="var(--color-grey-000)"
          width="190"
        />
        <GoodeedLogo
          width= "147"
          color="var(--color-grey-000)" 
        />
        <MicrodonLogo
          color1="var(--color-grey-000)"
          color2="var(--color-grey-000)"
          width="164"
        />
        <YouMatterLogo color="var(--color-grey-000)" width="190" />
        <MaisonDeCrowdfundingLogoOnDark width="175" />
      </div>
    </div>
  )
}
