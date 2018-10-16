import React, { Component, Fragment } from 'react'
import { RewardCard } from 'kitten/components/cards/reward-card'
import { Deprecated } from 'kitten/helpers/utils/deprecated'

export const ContributionCard = props => {
  const message = `You can use the RewardComponent instead.
    For more information: https://github.com/KissKissBankBank/kitten/blob/master/assets/javascripts/kitten/components/cards/reward-card.js`

  return (
    <Deprecated warningMessage={message}>
      <RewardCard {...props} />
    </Deprecated>
  )
}
