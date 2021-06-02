import React from 'react'
import { ContributionCard } from './index'
import { Container } from '../../../components/grid/container'

export const Default = () => (
  <Container>
    <ContributionCard>
      <ContributionCard.Image>
        <img src="/kitten.jpg" alt="" />
      </ContributionCard.Image>

      <ContributionCard.Title>
        Lorem ipsum dolor sit amet, consectetuer adipiscing ligula eget dolor 
        eget dolor.eget dolor.eget dolor.
      </ContributionCard.Title>

      <ContributionCard.PillNumber value={0} min={0} max={100} />
      <ContributionCard.Amount>
        15&nbsp;€
      </ContributionCard.Amount>
    </ContributionCard>
  </Container>
)

export default {
  title: 'Cards/Contribution-card',
  component: ContributionCard,
}
