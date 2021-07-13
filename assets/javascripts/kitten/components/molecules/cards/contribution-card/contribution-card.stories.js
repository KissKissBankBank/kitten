import React from 'react'
import { ContributionCard } from './index'
import { Container, Marger, RocketIllustration } from '../../../..'

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
      <ContributionCard onClose={() => {}}>
        <ContributionCard.Image>
          <img src="/kitten.jpg" alt="" />
        </ContributionCard.Image>

        <ContributionCard.Title>
          Lorem ipsum dolor sit amet.
        </ContributionCard.Title>

        <ContributionCard.PillNumber value={0} min={0} max={100} />
        <ContributionCard.Amount>1005&nbsp;€</ContributionCard.Amount>
      </ContributionCard>
    </StoryContainer>
  )
}

export const PetitPlus = () => {
  return (
    <StoryContainer>
      <ContributionCard borderStyle="dashed" largeInput>
        <ContributionCard.Image className="k-u-hidden@xs-down">
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
