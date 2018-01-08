import React from 'react'
import { ButtonIcon } from 'kitten/components/buttons/button-icon'
import { HeartIcon } from 'kitten/components/icons/heart-icon'
import { ArrowIcon } from 'kitten/components/icons/arrow-icon'

export const KarlButtonIconHeart = props => {
  return (
    <ButtonIcon { ...props }>
      <HeartIcon className="k-ButtonIcon__svg" />
    </ButtonIcon>
  )
}

export const KarlButtonIconNano = props => {
  return (
    <ButtonIcon { ...props }>
      <ArrowIcon className="k-ButtonIcon__svg" />
    </ButtonIcon>
  )
}
