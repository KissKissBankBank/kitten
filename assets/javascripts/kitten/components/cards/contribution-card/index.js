import React from 'react'
import { RewardCard } from '../../../components/cards/reward-card'
import { Deprecated } from '../../../helpers/utils/deprecated'

export const ContributionCard = props => {
  const message = `You can use the RewardComponent instead.
    For more information: https://github.com/KissKissBankBank/../../blob/master/assets/javascripts/../../components/cards/reward-card.js`

  return (
    <Deprecated warningMessage={message}>
      <RewardCard {...props} />
    </Deprecated>
  )
}
