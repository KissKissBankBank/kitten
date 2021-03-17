import React from 'react'
import { pxToRem } from '../../helpers/utils/typography'
import styled from 'styled-components'

import { KissKissBankBankLogo } from './kisskissbankbanklogo'
import { GoodeedLogo } from './goodeedlogo'
import { MaisonDeCrowdfundingLogo } from './mdc'
import { MicrodonLogo } from './microdonlogo'

import { Text } from '../..'

const Container = styled.div`
  padding: ${pxToRem(40)};
  background-color: lightgray;
`
const Group = styled(({ className, children, title }) => {
  return (
    <>
      <h2>{title}</h2>
      <div className={className}>{children}</div>
    </>
  )
})`
  margin-bottom: ${pxToRem(40)};
`

const LogoContainer = styled(({ className, children }) => {
  return (
    <div className={className}>
      <div className="svgWrapper">{children}</div>
      <Text size="micro">
        {children.type.name}
      </Text>
    </div>
  )
})`
  text-align: left;
  margin-bottom: ${pxToRem(40)};

  .svgWrapper {
    height: ${pxToRem(50)};
  }

  svg {
    width: auto;
    height: auto;
    width: ${pxToRem(150)};
    max-height: ${pxToRem(100)};
  }
`

export const AllLogos = () => {
  return (
    <Container>
      <Group>
        <LogoContainer children={<KissKissBankBankLogo />} />
        <LogoContainer children={<GoodeedLogo />} />
        <LogoContainer children={<MaisonDeCrowdfundingLogo />} />
        <LogoContainer children={ <MicrodonLogo />} />
      </Group>
    </Container>
  )
}

export default { title: 'Logos/List' }
