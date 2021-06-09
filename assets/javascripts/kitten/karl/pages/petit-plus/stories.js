
import React from 'react'
import { ContributionCard } from '../../../components/cards/contribution-card'
import { Container } from '../../../components/grid/container'
import { Marger } from '../../../components/layout/marger'
import { RocketIllustration } from '../../../components/illustrations/rocket-illustration'

export default {
  title: 'pages/PetitPlus',
  component: ContributionCard,
}

const StoryContainer = ({ children }) => (
  <Container>
    <Marger top="5" bottom="5">
      {children}
    </Marger>
  </Container>
)

export const Default = () => {
  return (
    <StoryContainer>
      <ContributionCard borderStyle="dashed" closeButton={false}>
        <ContributionCard.Image>
            <RocketIllustration width={45} height={81} />
          </ContributionCard.Image>

          <ContributionCard.Title>
            Un petit plus pour 900 care
            <ContributionCard.Description>
              Donnez encore plus de chances à ce projet de voir le jour.
            </ContributionCard.Description>
          </ContributionCard.Title>
          
          <ContributionCard.Input unit="€" />
          <ContributionCard.Action>Ajouter</ContributionCard.Action>
      </ContributionCard>
    </StoryContainer>
  )
}
