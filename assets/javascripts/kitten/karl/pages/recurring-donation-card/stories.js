import React from 'react'
import { BackingCard, TextInputWithUnit, Text, Title, Label, Grid, GridCol } from 'kitten'
import { StyledRecurringDonation } from './styles'

export default {
  title: 'pages/RecurringDotation',
}

export const OuSoutenezNous = (props) => {
  return (
    <Grid>
      <GridCol col="4">
        <StyledRecurringDonation>
          <BackingCard
            as="button"
            className="k-u-reset-button"
            {...props}
          >
            <BackingCard.Title>
              <Title tag="h3" modifier="quaternary" noMargin>
                … ou soutenez nous
              </Title>
            </BackingCard.Title>

            <BackingCard.Description>
              <Text tag="p" size="default" className="k-u-margin-bottom-double k-u-margin-top-none">
                Faites un don mensuel du montant de votre choix pour continuer à faire vivre notre projet&nbsp;:
              </Text>
              <div className="k-RecurringDonation__thumbnailsThreesome">
                <div as="button" className="k-RecurringDonation__thumbnail">
                  <Text tag="p" className="k-u-margin-none" weight="bold" size="huge">
                    2&nbsp;€
                  </Text>
                  <Text className="k-u-margin-none" tag="p" size="tiny">par mois</Text>
                </div>
                <div as="button" className="k-RecurringDonation__thumbnail">
                  <Text className="k-u-margin-none"tag="p" className="k-u-margin-none" weight="bold" size="huge">5&nbsp;€</Text>
                  <Text className="k-u-margin-none" tag="p" size="tiny">par mois</Text>
                </div>
                <div as="button" className="k-RecurringDonation__thumbnail">
                  <Text tag="p" className="k-u-margin-none" weight="bold" size="huge">10&nbsp;€</Text>
                  <Text className="k-u-margin-none" tag="p" size="tiny">par mois</Text>
                </div>
              </div>
            </BackingCard.Description>
            
            <BackingCard.Form className="k-RecurringDonation__form">
              <Label className="k-u-margin-bottom-single">
                ou un montant libre&nbsp;:
              </Label>
              <TextInputWithUnit
                className="k-RecurringDonation__unitInput"
                unit="€"
                secondUnit="par mois"
              />
            </BackingCard.Form>
    
            <BackingCard.Button className="k-u-margin-bottom-triple">
              Nous soutenir
            </BackingCard.Button>
          </BackingCard>
        </StyledRecurringDonation>
      </GridCol>
    </Grid> 
  )
}
