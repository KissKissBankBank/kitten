import React from 'react'
import { BackingCard, TextInputWithUnit, Text, Title } from 'kitten'
import { StyledRecurringDonation } from './styles'

export default {
  title: 'pages/RecurringDotation',
}

export const OuSoutenezNous = (props) => {
  return (
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
          <Text tag="p" size="default" className="k-u-margin-bottom-double">
            Faites un don mensuel du montant de votre choix pour continuer à faire vivre notre projet&nbsp;:
          </Text>
          <div className="k-RecurringDonation__thumbnailsThreesome">
            <div as="button" className="k-RecurringDonation__thumbnail">
              <Text tag="p" className="k-u-margin-none" weight="bold" size="huge">
                2 €
              </Text>
              <Text className="k-u-margin-none" tag="p" size="tiny">par mois</Text>
            </div>
            <div as="button" className="k-RecurringDonation__thumbnail">
              <Text className="k-u-margin-none"tag="p" className="k-u-margin-none" weight="bold" size="huge">5 €</Text>
              <Text className="k-u-margin-none" tag="p" size="tiny">par mois</Text>
            </div>
            <div as="button" className="k-RecurringDonation__thumbnail">
              <Text tag="p" className="k-u-margin-none" weight="bold" size="huge">10 €</Text>
              <Text className="k-u-margin-none" tag="p" size="tiny">par mois</Text>
            </div>
          </div>

          <div className="k-u-align-center">
            <Text tag="p" weight="bold" size="default" style={{ marginBottom: '7' }}>
              ou un montant libre&nbsp;:
            </Text>
            <TextInputWithUnit unit="€" secondUnit="par mois" style={{ fontSize: '14px' }} />
          </div>
        </BackingCard.Description>
        
        <BackingCard.Button className="k-RecurringDonation__button">
          Nous soutenir
        </BackingCard.Button>
      </BackingCard>
    </StyledRecurringDonation>
  )
}
