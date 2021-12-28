import React from 'react'
import styled from 'styled-components'
import { Text, pxToRem } from '../../..'

import { KissKissBankBankLogo } from './kisskissbankbanklogo'
import { GoodeedLogo } from './goodeedlogo'
import { MaisonDeCrowdfundingLogo } from './mdc'
import { MaisonDeCrowdfundingLogoOnDark } from './mdc/on-dark'
import { MicrodonLogo } from './microdonlogo'
import { LendopolisLogo } from './lendopolis-logo'
import { LendopolisLogoOnDark } from './lendopolis-logo/on-dark'
import { KkbbCoLogo } from './kkbb-co'
import { YouMatterLogo } from './youmatter'

const Container = styled.div`
  padding: ${pxToRem(40)};
  background-color: lightgray;
`
const Group = styled(({ className, children, title }) => {
  return (
    <>
      <h2 className="k-u-size-giant k-u-weight-bold">{title}</h2>
      <div className={className}>{children}</div>
    </>
  )
})`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${pxToRem(140)}, 1fr));
  grid-gap: ${pxToRem(80)} ${pxToRem(40)};
  margin-bottom: ${pxToRem(50)};
`

const LogoContainer = styled(({ className, children, name }) => {
  return (
    <div className={className}>
      <div className="svgWrapper">{children}</div>
      <Text size="micro">{name}</Text>
    </div>
  )
})`
  text-align: center;

  .svgWrapper {
    margin: auto;
    height: ${pxToRem(50)};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    width: auto;
    height: auto;
    width: ${pxToRem(150)};
    max-height: ${pxToRem(100)};
  }

  &.noMaxDimensions svg {
    max-height: ${pxToRem(50)};
    max-width: ${pxToRem(50)};
  }
`

export const AllLogos = () => {
  return (
    <Container>
      <Group title="KissKissBankBank">
        <LogoContainer children={<KissKissBankBankLogo />} />
        <LogoContainer
          className="noMaxDimensions"
          name="version tiny"
          children={<KissKissBankBankLogo tiny />}
        />
      </Group>

      <Group title="Lendopolis">
        <LogoContainer children={<LendopolisLogo />} />
        <LogoContainer children={<LendopolisLogoOnDark />} />
        <LogoContainer
          className="noMaxDimensions"
          name="version tiny"
          children={<LendopolisLogo tiny />}
        />
      </Group>

      <Group title="KissKissBankBank&Co">
        <LogoContainer children={<KkbbCoLogo />} />
      </Group>

      <Group title="Maison de Crowdfunding">
        <LogoContainer children={<MaisonDeCrowdfundingLogo />} />
        <LogoContainer children={<MaisonDeCrowdfundingLogoOnDark />} />
      </Group>

      <Group title="Goodeed">
        <LogoContainer children={<GoodeedLogo />} />
      </Group>

      <Group title="MicroDon">
        <LogoContainer children={<MicrodonLogo />} />
      </Group>

      <Group title="YouMatter">
        <LogoContainer children={<YouMatterLogo />} />
      </Group>
    </Container>
  )
}

export default { title: 'Graphics/Logos' }
