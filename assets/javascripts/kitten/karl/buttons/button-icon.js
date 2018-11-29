import React from 'react'
import { ButtonIcon } from '../../components/buttons/button-icon'
import { HeartIcon } from '../../components/icons/heart-icon'
import { ArrowIcon } from '../../components/icons/arrow-icon'

export const KarlButtonIconHeart = props => (
  <ButtonIcon {...props}>
    <HeartIcon className="k-ButtonIcon__svg" />
  </ButtonIcon>
)

export const KarlButtonIconNano = props => (
  <ButtonIcon {...props}>
    <ArrowIcon className="k-ButtonIcon__svg" />
  </ButtonIcon>
)
