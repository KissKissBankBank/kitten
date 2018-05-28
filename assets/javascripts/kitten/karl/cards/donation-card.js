import React, { Fragment } from 'react'
import { DonationCard } from 'kitten/components/cards/donation-card'
import { Marger } from 'kitten/components/layout/marger'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { TextInputWithUnit } from 'kitten/components/form/text-input-with-unit'
import { Text } from 'kitten/components/typography/text'
import { Container } from 'kitten/components/grid/container'
import { Label } from 'kitten/components/form/label'
import { KarlExampleTitle } from 'kitten/karl/examples/title'
import { mediaQueries } from 'kitten/hoc/media-queries'

const KarlDonationInputBase = props => {
  const {
    donationId,
    isError,
    errorTag,
    amountPlaceholder,
    currencySymbol,
    amountLabel,
    isDisabled,
    viewportIsSOrLess,
  } = props

  const donationIsError = !isError ? 4 : 1
  const donationViewport = !viewportIsSOrLess ? 4 : 2

  return (
    <Marger top="3" bottom={donationIsError && donationViewport}>
      <Grid>
        <GridCol col-xs="7" col-m="5">
          <Marger bottom="1.5">
            <Label size="micro" htmlFor={donationId}>
              {amountLabel}
            </Label>
          </Marger>
          <Marger top="1.5" bottom={isError ? 1 : null}>
            <TextInputWithUnit
              error={isError}
              id={donationId}
              type="number"
              placeholder={amountPlaceholder}
              unit={currencySymbol}
              disabled={isDisabled}
            />
          </Marger>
          {isError && (
            <Marger top="1">
              <Text size="micro" color="error" weight="regular">
                {errorTag}
              </Text>
            </Marger>
          )}
        </GridCol>
      </Grid>
    </Marger>
  )
}

export const KarlDonationCard = () => (
  <Fragment>
    <KarlExampleTitle>Donation card</KarlExampleTitle>
    <Container>
      <Marger top="2" bottom="2">
        <DonationCard
          titleAmount="Free gift"
          textDescription="In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi."
          button="To contribute"
          renderAmountInput={() => (
            <KarlDonationInput
              donationId="donation-amount"
              amountLabel="Enter your amount"
              amountPlaceholder="Your amount"
              currencySymbol="€"
            />
          )}
        />
      </Marger>
    </Container>

    <KarlExampleTitle>Donation card disabled</KarlExampleTitle>
    <Container>
      <Marger top="2" bottom="2">
        <DonationCard
          titleAmount="Free gift"
          textDescription="In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi."
          button="To contribute"
          isDisabled
          renderAmountInput={() => (
            <KarlDonationInput
              amountLabel="Enter your amount"
              amountPlaceholder="Your amount"
              currencySymbol="€"
              isDisabled
            />
          )}
        />
      </Marger>
    </Container>

    <KarlExampleTitle>Donation card with error</KarlExampleTitle>
    <Container>
      <Marger top="2" bottom="2">
        <DonationCard
          titleAmount="Free gift"
          textDescription="In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi."
          button="To contribute"
          renderAmountInput={() => (
            <KarlDonationInput
              amountLabel="Enter your amount"
              amountPlaceholder="Your amount"
              currencySymbol="€"
              isError
              errorTag="lorem ipsum dolor sit amet consectetur."
            />
          )}
        />
      </Marger>
    </Container>
  </Fragment>
)

export const KarlDonationInput = mediaQueries(KarlDonationInputBase, {
  viewportIsSOrLess: true,
})
