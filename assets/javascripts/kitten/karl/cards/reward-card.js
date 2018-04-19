import React, { Fragment } from 'react'
import { RewardCard } from 'kitten/components/cards/reward-card'
import { Container } from 'kitten/components/grid/container'
import { Marger } from 'kitten/components/layout/marger'
import { KarlExampleTitle } from 'kitten/karl/examples/title'

export const KarlRewardCard = () => (
  <Fragment>
    <KarlExampleTitle>Reward card</KarlExampleTitle>
    <Container>
      <Marger bottom="2">
        <RewardCard
          titleMount="Pour 15€"
          titleDescription="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
          textDescription="In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi."
          titleContributors="Contributeurs"
          titleSmallContributors="Contributeurs : "
          valueContributors="35"
          titleDelivery="Livraison"
          titleSmallDelivery="Livraison : "
          valueDelivery="Janvier 2018"
          titleAvailability="Disponibilité"
          titleSmallAvailability="Disponibilité : "
          valueAvailability="200"
          button="Choisir"
          myContribution="Vous avez contribué à ce projet"
          manageContribution="Gérer ma contribution"
          href="#"
          imageSrc="https://placehold.it/40x40/caf4fe/caf4fe"
        />
      </Marger>
    </Container>

    <KarlExampleTitle>Disabled Reward card</KarlExampleTitle>
    <Marger top="2" bottom="2">
      <Container>
        <RewardCard
          titleMount="Pour 15€"
          titleDescription="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
          textDescription="In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi."
          titleContributors="Contributeurs"
          titleSmallContributors="Contributeurs : "
          valueContributors="35"
          titleDelivery="Livraison"
          titleSmallDelivery="Livraison : "
          valueDelivery="Janvier 2018"
          titleAvailability="Disponibilité"
          titleSmallAvailability="Disponibilité : "
          valueAvailability="200"
          button="Choisir"
          myContribution="Vous avez contribué à ce projet"
          manageContribution="Gérer ma contribution"
          href="#"
          imageSrc="https://placehold.it/40x40/caf4fe/caf4fe"
          isDisabled="true"
        />
      </Container>
    </Marger>

    <KarlExampleTitle>Completed Reward card</KarlExampleTitle>
    <Marger top="2" bottom="2">
      <Container>
        <RewardCard
          titleMount="Pour 15€"
          titleDescription="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
          textDescription="In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi."
          titleContributors="Contributeurs"
          titleSmallContributors="Contributeurs : "
          valueContributors="35"
          titleDelivery="Livraison"
          titleSmallDelivery="Livraison : "
          valueDelivery="Janvier 2018"
          titleAvailability="Disponibilité"
          titleSmallAvailability="Disponibilité : "
          valueAvailability="200"
          myContribution="Vous avez contribué à ce projet"
          manageContribution="Gérer ma contribution"
          href="#"
          imageSrc="https://placehold.it/40x40/caf4fe/caf4fe"
        />
      </Container>
    </Marger>
  </Fragment>
)
