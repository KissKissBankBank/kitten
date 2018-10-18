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
          donationForm={{
            buttonLabel: 'To contribute',
            inputId: 'donation-amount-1',
            inputLabel: 'Enter your amount',
            inputPlaceholder: 'Your amount',
            inputUnit: '€',
          }}
        />
      </Marger>
    </Container>

    <KarlExampleTitle>Donation card disabled</KarlExampleTitle>
    <Container>
      <Marger top="2" bottom="2">
        <DonationCard
          title="In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."
          donationForm={{
            buttonLabel: 'To contribute',
            inputId: 'donation-amount-2',
            inputLabel: 'Enter your amount',
            inputPlaceholder: 'Your amount',
            inputUnit: '€',
          }}
          isDisabled
        />
      </Marger>
    </Container>

    <KarlExampleTitle>Donation card with error</KarlExampleTitle>
    <Container>
      <Marger top="2" bottom="2">
        <DonationCard
          title="In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."
          donationForm={{
            buttonLabel: 'To contribute',
            inputId: 'donation-amount-3',
            inputLabel: 'Enter your amount',
            inputPlaceholder: 'Your amount',
            inputUnit: '€',
            inputIsOnError: true,
            errorMessage: 'lorem ipsum dolor sit amet consectetur.',
          }}
        />
      </Marger>
    </Container>

    <KarlExampleTitle>Donation card tiny version</KarlExampleTitle>
    <Container>
      <Marger top="2" bottom="2">
        <DonationCard
          title="In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."
          donationForm={{
            buttonLabel: 'To contribute',
            inputId: 'donation-amount-4',
            inputLabel: 'Enter your amount',
            inputPlaceholder: 'Your amount',
            inputUnit: '€',
          }}
          version="tiny"
        />
      </Marger>
    </Container>
  </Fragment>
)
