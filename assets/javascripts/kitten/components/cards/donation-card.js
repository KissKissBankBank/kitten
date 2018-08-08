import React from 'react'
import { ContributionCard } from 'kitten/components/cards/contribution-card'

export const DonationCard = props => {
  const {
    titleContributors,
    titleDelivery,
    titleAvailability,
    valueContributors,
    valueDelivery,
    valueAvailability,
    render,
    renderAmountInput,
    ...others
  } = props

  return <ContributionCard render={renderAmountInput} {...others} />
}
