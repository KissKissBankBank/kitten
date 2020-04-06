import React from 'react'
import { Header } from './components/header'
import { ContributionDetails } from './components/details'
import { Contributor } from './components/contributor'
import { ContributionGroup } from './components/group'

const KissbankersModal = () => (
  <>
    <Header orderId="1498800" orderDate={new Date()} />
    <ContributionDetails
      overallTotal={100}
      rewardsTotal={50}
      donation={25}
      petitPlus={5}
      fdp={25}
    />
    <Contributor
      firstName="Michel et Evelyne"
      lastName="Arnaud"
      email="emarnaud@orange.fr"
      address={`34 rue de paradis, 7501O Paris, France`}
      hasMultipleContributions={true}
    />
    <ContributionGroup>
      <ContributionGroup.Title>Livraison</ContributionGroup.Title>
      <ContributionGroup.Card
        description="Cuvée Castille - Carton 6 bouteilles - Retrait gratuit"
        option="75 cl"
        deliveryDate={new Date()}
        quantity={1}
        price={80}
      />
      <ContributionGroup.Card
        description="Cuvée Castille - Carton 6 bouteilles - Retrait gratuit"
        quantity={1}
        price={80}
      />
      <ContributionGroup.Card
        description="Cuvée Castille - Carton 6 bouteilles - Retrait gratuit"
        option="75 cl"
        deliveryDate={new Date()}
        quantity={1}
        price={80}
      />
    </ContributionGroup>

    <ContributionGroup>
      <ContributionGroup.Title>Remise en main propre</ContributionGroup.Title>
      <ContributionGroup.Card
        description="Cuvée Castille - Carton 6 bouteilles - Retrait gratuit"
        option="75 cl"
        deliveryDate={new Date()}
        quantity={1}
        price={80}
      />
      <ContributionGroup.Card
        description="Cuvée Castille - Carton 6 bouteilles - Retrait gratuit"
        quantity={1}
        price={80}
      />
      <ContributionGroup.Card
        description="Cuvée Castille - Carton 6 bouteilles - Retrait gratuit"
        option="75 cl"
        deliveryDate={new Date()}
        quantity={1}
        price={80}
      />
    </ContributionGroup>
  </>
)

export default KissbankersModal
