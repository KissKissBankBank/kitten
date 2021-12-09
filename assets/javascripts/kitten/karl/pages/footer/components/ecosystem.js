import React from 'react'
import {
  Text,
  LendopolisLogo,
  GoodeedLogo,
  MicrodonLogo,
  MaisonDeCrowdfundingLogoOnDark
} from 'kitten'

export const Ecosystem = () => {
  return (
    <div className="k-Footer__ecosystem">
      <Text
        tag="p"
        cssColor="var(--color-grey-000)"
        transform="uppercase"
        className="k-Footer__ecosystem--title"
      >
        Notre écosystème <br />engagé
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
        <LendopolisLogo
          primaryColor="var(--color-grey-000)"
          secondaryColor="var(--color-grey-000)"
          width="190"
        />
        <MaisonDeCrowdfundingLogoOnDark width="175" />
      </div>
    </div>
  )
}
