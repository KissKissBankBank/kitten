import React from 'react'
import { ContributionCard } from './index'
import { Container } from '../../../components/grid/container'
import { Marger } from '../../../components/layout/marger'
import { RocketIllustration } from '../../../components/illustrations/rocket-illustration'

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
          1005&nbsp;€
        </ContributionCard.Amount>
      </ContributionCard>
    </StoryContainer>
  )
}

export const PetitPlus = () => {
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
