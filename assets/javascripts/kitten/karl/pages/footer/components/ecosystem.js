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
        Notre écosystème engagé
      </Text>
      {/* <div className="k-Footer__ecosystem--logos"> */}
      <LendopolisLogo
        primaryColor="var(--color-grey-000)"
        secondaryColor="var(--color-grey-000)"
        width="190"
      />
      <GoodeedLogo width="150" color="var(--color-grey-000)" />
      <MicrodonLogo width="164" color="var(--color-grey-000)" />
      <LendopolisLogo
        primaryColor="var(--color-grey-000)"
        secondaryColor="var(--color-grey-000)"
        width="190"
      />
      <MaisonDeCrowdfundingLogoOnDark />
      {/* </div> */}
    </div>
  )
}
