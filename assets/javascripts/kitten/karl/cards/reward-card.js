import React from 'react'
import Radium, { StyleRoot } from 'radium'
import { RewardCard } from 'kitten/components/cards/reward-card'
import { Container } from 'kitten/components/grid/container'
import { Marger } from 'kitten/components/layout/marger'
import { KarlExampleTitle } from 'kitten/karl/examples/title'

export const KarlRewardCard = () => (
  <StyleRoot>
    <KarlExampleTitle>Reward card</KarlExampleTitle>
    <Container>
      <Marger bottom="2">
        <RewardCard
          titleAmount="For 00€"
          titleDescription="Lorem ipsumn, consectetuer adipiscing elit."
          textDescription="In enim justo."
          titleContributors="Contributors"
          titleSmallContributors="Contributors : "
          valueContributors="35"
          titleDelivery="Delivery"
          titleSmallDelivery="Delivery : "
          valueDelivery="January 2018"
          titleAvailability="Availability"
          titleSmallAvailability="Availability : "
          valueAvailability="200"
          button="Choose"
          imageSrc
        />
      </Marger>
    </Container>

    <KarlExampleTitle>Disabled Reward card</KarlExampleTitle>
    <Container>
      <Marger top="2" bottom="2">
        <RewardCard
          titleAmount="For 00€"
          titleDescription="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
          textDescription="In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi."
          titleContributors="Contributors"
          titleSmallContributors="Contributors : "
          valueContributors="35"
          titleDelivery="Delivery"
          titleSmallDelivery="Delivery : "
          valueDelivery="January 2018"
          titleAvailability="Availability"
          titleSmallAvailability="Availability : "
          valueAvailability="200"
          button="Choose"
          myContribution="You contributed to this project"
          manageContribution="Manage my contribution"
          imageSrc
          isDisabled
        />
      </Marger>
    </Container>

    <KarlExampleTitle>Completed Reward card</KarlExampleTitle>
    <Container>
      <Marger top="2" bottom="2">
        <RewardCard
          titleAmount="For 00€"
          titleDescription="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
          textDescription="In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi."
          titleContributors="Contributors"
          titleSmallContributors="Contributors : "
          valueContributors="35"
          titleDelivery="Delivery"
          titleSmallDelivery="Delivery : "
          valueDelivery="January 2018"
          titleAvailability="Availability"
          titleSmallAvailability="Availability : "
          valueAvailability="200"
          myContribution="You contributed to this project"
          manageContribution="Manage my contribution"
          imageSrc
        />
      </Marger>
    </Container>

    <KarlExampleTitle>Without Image Reward card</KarlExampleTitle>
    <Container>
      <Marger top="2" bottom="2">
        <RewardCard
          titleAmount="For 00€"
          titleDescription="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
          textDescription="In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi."
          titleContributors="Contributors"
          titleSmallContributors="Contributors : "
          valueContributors="35"
          titleDelivery="Delivery"
          titleSmallDelivery="Delivery : "
          valueDelivery="January 2018"
          titleAvailability="Availability"
          titleSmallAvailability="Availability : "
          valueAvailability="200"
          myContribution="You contributed to this project"
          manageContribution="Manage my contribution"
          withoutImage
        />
      </Marger>
    </Container>

    <KarlExampleTitle>Without Image Reward card</KarlExampleTitle>
    <Container>
      <Marger top="2" bottom="2">
        <RewardCard
          titleAmount="For 00€"
          titleDescription="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
          textDescription="In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi."
          titleContributors="Contributors"
          titleSmallContributors="Contributors : "
          valueContributors="35"
          titleDelivery="Delivery"
          titleSmallDelivery="Delivery : "
          valueDelivery="January 2018"
          titleAvailability="Availability"
          titleSmallAvailability="Availability : "
          valueAvailability="200"
          myContribution="You contributed to this project"
          manageContribution="Manage my contribution"
          button="Choose"
        />
      </Marger>
    </Container>

    <KarlExampleTitle>Small Image Reward card</KarlExampleTitle>
    <Container>
      <Marger top="2" bottom="2">
        <RewardCard
          titleAmount="For 00€"
          titleDescription="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
          textDescription="In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi."
          titleContributors="Contributors"
          titleSmallContributors="Contributors : "
          valueContributors="35"
          titleDelivery="Delivery"
          titleSmallDelivery="Delivery : "
          valueDelivery="January 2018"
          titleAvailability="Availability"
          titleSmallAvailability="Availability : "
          valueAvailability="200"
          myContribution="You contributed to this project"
          manageContribution="Manage my contribution"
          button="Choose"
          imageSrcSmall
        />
      </Marger>
    </Container>
  </StyleRoot>
)
