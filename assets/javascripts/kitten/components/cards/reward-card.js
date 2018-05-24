import React from 'react'
import { ContributionCard } from 'kitten/components/cards/contribution-card'

export const RewardCard = props => {
  const { render, ...others } = props

  return <ContributionCard {...others} />
}
