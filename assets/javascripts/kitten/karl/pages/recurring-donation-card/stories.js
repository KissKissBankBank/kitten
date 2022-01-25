import React from 'react'
import {
  BackingCard,
  TextInputWithUnit,
  Text,
  Title,
  Label,
} from 'kitten'
import { StyledRecurringDonation } from './styles'

export default {
  title: 'pages/RecurringDotation',
}

export const DonRecurent = (props) => {
  return (
    <div className="story-Container story-Grid">
      <StyledRecurringDonation>
        <BackingCard {...props}>
          <BackingCard.Title>
            <Title tag="h3" modifier="quaternary" noMargin>
              … ou soutenez nous
            </Title>
          </BackingCard.Title>

          <BackingCard.Form>
            <Text tag="p" size="default" className="k-u-margin-bottom-double k-u-margin-top-none">
              Faites un don mensuel du montant de votre choix pour continuer à faire vivre notre projet&nbsp;:
            </Text>
            <div className="k-RecurringDonation__thumbnailsTrio">
              <div as="button" className="k-RecurringDonation__thumbnail">
                <Text tag="p" className="k-u-margin-none" weight="bold" size="huge">
                  2&nbsp;€
                </Text>
                <Text className="k-u-margin-none" tag="p" size="tiny">par mois</Text>
              </div>
              <div as="button" className="k-RecurringDonation__thumbnail">
                <Text className="k-u-margin-none" tag="p" weight="bold" size="huge">5&nbsp;€</Text>
                <Text className="k-u-margin-none" tag="p" size="tiny">par mois</Text>
              </div>
              <div as="button" className="k-RecurringDonation__thumbnail">
                <Text tag="p" className="k-u-margin-none" weight="bold" size="huge">10&nbsp;€</Text>
                <Text className="k-u-margin-none" tag="p" size="tiny">par mois</Text>
              </div>
            </div>

            <div className="k-RecurringDonation__form">
              <Label className="k-u-margin-bottom-single k-u-align-center">
                ou un montant libre&nbsp;:
              </Label>
              <TextInputWithUnit
                unitWord={<span>€{' '}<Text size="tiny" weight="light">par mois</Text></span>}
              />
            </div>
          </BackingCard.Form>
  
          <BackingCard.Button className="k-u-margin-bottom-triple">
            Nous soutenir
          </BackingCard.Button>
        </BackingCard>
      </StyledRecurringDonation>
    </div>
  )
}
