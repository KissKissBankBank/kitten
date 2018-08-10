import React, { Fragment } from 'react'
import { DonationCard } from 'kitten/components/cards/donation-card'
import { KarlExampleTitle } from 'kitten/karl/examples/title'
import { Container } from 'kitten/components/grid/container'
import { Marger } from 'kitten/components/layout/marger'

export const KarlDonationCard = () => (
  <Fragment>
    <KarlExampleTitle>Donation card</KarlExampleTitle>
    <Container>
      <Marger top="2" bottom="2">
        <DonationCard
          title="In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."
          buttonLabel="To contribute"
          donationId="donation-amount"
          amountLabel="Enter your amount"
          amountPlaceholder="Your amount"
          currencySymbol="€"
        />
      </Marger>
    </Container>

    <KarlExampleTitle>Donation card disabled</KarlExampleTitle>
    <Container>
      <Marger top="2" bottom="2">
        <DonationCard
          title="In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."
          buttonLabel="To contribute"
          amountLabel="Enter your amount"
          amountPlaceholder="Your amount"
          currencySymbol="€"
          isDisabled
        />
      </Marger>
    </Container>

    <KarlExampleTitle>Donation card with error</KarlExampleTitle>
    <Container>
      <Marger top="2" bottom="2">
        <DonationCard
          title="In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."
          buttonLabel="To contribute"
          amountLabel="Enter your amount"
          amountPlaceholder="Your amount"
          currencySymbol="€"
          isError
          errorTag="lorem ipsum dolor sit amet consectetur."
        />
      </Marger>
    </Container>
  </Fragment>
)
